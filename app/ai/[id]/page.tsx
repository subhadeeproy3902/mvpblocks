import InputDemo from "@/components/ai/AIChat";

export default function AIGenPage(){
  return (
    <div className="w-full h-auto grid grid-cols-1 md:grid-cols-3">
      <div className="col-span-1 border-r py-2 h-full flex flex-col justify-between">
        <InputDemo />
      </div>
      <div className="col-span-2 p-4 h-full">
        <h1 className="text-2xl font-bold">AI Generated Page</h1>
        <p className="mt-2 text-gray-600">This is a sample AI generated page layout.</p>
      </div>
    </div>
  )
}