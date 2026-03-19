import { useState } from "react";
import { Download, Check } from "lucide-react";

const FileCard = ({ file, onDownload }) => {
  const [status, setStatus] = useState("idle"); // idle | loading | done

  const handleDownload = async () => {
    if (status !== "idle") return;
    setStatus("loading");
    try {
      await onDownload(file);
      setStatus("done");
      setTimeout(() => setStatus("idle"), 2000);
    } catch (e) {
      setStatus("idle");
    }
  };

  return (
    <div className="flex items-center justify-between bg-white border border-gray-100 rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col max-w-[70%]">
        <span className="text-sm md:text-base lg:text-md font-semibold text-gray-800 truncate">
          {file.name}
        </span>
        <span className="text-xs md:text-sm text-gray-500 mt-1">
          {file.size}
        </span>
      </div>

      <button
        onClick={handleDownload}
        className={`flex items-center gap-2 px-4 md:px-4 py-2 md:py-2 rounded-lg text-sm md:text-base font-medium transition-all duration-200 whitespace-nowrap
          ${
            status === "idle"
              ? "bg-blue-500 text-white hover:bg-blue-600 active:scale-95"
              : status === "loading"
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-green-500 text-white"
          }`}
      >
        {status === "idle" && (
          <>
            <Download size={18} /> Download
          </>
        )}
        {status === "loading" && "Downloading..."}
        {status === "done" && <Check size={20} />}
      </button>
    </div>
  );
};

export default function FileCardList() {
  const files = [
    { id: 1, name: "Report.pdf", size: "2.4 MB" },
    { id: 2, name: "Image.png", size: "1.1 MB" },
    { id: 3, name: "Video.mp4", size: "15.8 MB" },
    { id: 4, name: "Presentation.pptx", size: "5.2 MB" },
    { id: 5, name: "Archive.zip", size: "25.3 MB" },
  ];

  const fakeDownloadApi = (file) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Downloaded:", file.name);
        resolve();
      }, 1500);
    });
  };

  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {files.map((file) => (
        <FileCard key={file.id} file={file} onDownload={fakeDownloadApi} />
      ))}
    </div>
  );
}
