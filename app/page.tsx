import { Form } from "@/components/form";
import { Header } from "@/components/header";
import { ResponseList } from "@/components/response-list";

export default function Home() {
  return (
    <div className="p-20 h-full">
      <div className="h-full flex flex-col">
        <Header />
        <ResponseList />
        <Form />
      </div>
    </div>
  );
}
