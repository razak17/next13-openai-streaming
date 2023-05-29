"use client";

import { responseAtom } from "@/store/response-atom";
import { useAtom } from "jotai";
import { useState } from "react";

export function Form() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useAtom(responseAtom);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch("/api/openai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: input }),
    });
    if (!res.ok) {
      setIsLoading(false);
      throw new Error(res.statusText);
    }
    const data = res.body;
    if (!data) return;
    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;
    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setResponse((prev) => prev + chunkValue);
    }
    setIsLoading(false);
    setInput("");
  }

  return (
    <div
      className="
        py-4
        px-4 
        bg-white 
        border
        flex 
        items-center 
        gap-2 
        lg:gap-4 
        w-full
      "
    >
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 lg:gap-4 w-full"
      >
        <div className="relative w-full">
          <input
            required
            onChange={(e) => setInput(e.target.value)}
            value={input}
            id="message"
            placeholder="Ask a question..."
            className="
              text-black
              font-light
              py-4
              px-4
              bg-neutral-100 
              w-full 
              focus:outline-none
            "
          />
        </div>
        <button
          type="submit"
          className="
            px-6 
            py-4 
            bg-sky-500 
            cursor-pointer 
            hover:bg-sky-600 
            transition
          "
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
