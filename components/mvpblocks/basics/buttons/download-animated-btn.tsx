export default function DownloadBtn(){
    return (
        <button className="flex group relative cursor-pointer overflow-hidden rounded-4xl bg-gray-800 px-6 py-2 font-semibold text-white">
  <span className="absolute top-0 right-6 h-full w-full origin-right scale-100 transform rounded-3xl bg-orange-500 transition-transform duration-500 group-hover:scale-0"></span>
  <span className="mt-1 mr-1.5 relative z-10">Download</span>
  <div className="Z-11 relative rounded-4xl animate-bounce bg-orange-500 px-2 text-white mt-1.5">8</div>
</button>

    );
}