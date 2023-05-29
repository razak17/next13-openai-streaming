import { Form } from "@/components/form";
import { Header } from "@/components/header";
import { ResponseItem } from "@/components/response-item";

export default function Home() {
  const responses = [
    {
      id: 1,
      text: "This is an example response.",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    },
  ];

  return (
    <div className="p-20 h-full">
      <div className="h-full flex flex-col">
        <Header />
        <div className="flex-1 overflow-y-auto">
          {responses.map((response, idx) => (
            <ResponseItem key={idx} text={response.text} />
          ))}
        </div>
        <Form />
      </div>
    </div>
  );
}
