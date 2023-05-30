"use client";

import { useAtom } from "jotai";
import { ResponseItem } from "./response-item";
import { responseAtom } from "@/store/response-atom";

export function ResponseList() {
  const [response] = useAtom(responseAtom);

  return (
    <div className="flex-1 overflow-y-auto">
      {response && <ResponseItem text={response} />}
    </div>
  );
}
