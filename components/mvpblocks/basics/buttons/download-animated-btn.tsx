import { MoveDown } from "lucide-react";

export default function DownloadBtn(){
    return (
        <button className="flex group relative cursor-pointer overflow-hidden rounded-4xl bg-gray-800 px-6 py-2 font-semibold text-white">
  <span className="absolute top-0 right-6 h-full w-full origin-right scale-100 transform rounded-3xl bg-green-600 transition-transform duration-500 group-hover:scale-0"></span>
  <span className="mt-1 mr-1 text-3xl relative z-10">Download</span>
  <div className="Z-11 relative rounded-4xl animate-bounce bg-green-600 p-2 text-white mt-1.5 ml-1"><MoveDown size={23} strokeWidth={4} /></div>
</button>

    );
}