import { FormInput } from "@/components/form-input";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="p-20 h-full">
      <div className="h-full flex flex-col">
        <Header />
        <div className="flex-1 overflow-y-auto">
          {/* TODO: Response item  */}
        </div>
        <FormInput />
      </div>
    </div>
  );
}
