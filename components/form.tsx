"use client";

export function Form() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
          id="message"
          required
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
          Submit
        </button>
      </form>
    </div>
  );
}
