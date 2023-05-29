export function ResponseItem({ text }: { text: string }) {
  return (
    <div className="flex gap-3 p-2">
      <div className="flex flex-col gap-2">
        <div className="text-sm w-fit overflow-hidden bg-gray-100 py-2 px-3">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
