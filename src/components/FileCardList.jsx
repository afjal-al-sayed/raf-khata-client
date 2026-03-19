import { useEffect } from "react";
import { Download, Check } from "lucide-react";
import useFileDownload from "../hooks/useFileDownload";
import { showErrorToast } from "../utils/uiErrorHandler";

const FileCard = ({ file }) => {
  const { status, error, downloadFile } = useFileDownload(file); // idle | loading | done

  useEffect(() => {
    if (error) showErrorToast(error);
  }, [error]);

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
        onClick={downloadFile}
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
        {status === "loading" && "Starting Download..."}
        {status === "done" && <Check size={20} />}
      </button>
    </div>
  );
};

export default function FileCardList({ bucket }) {
  const { fileList: files } = bucket;

  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {files.map((file) => (
        <FileCard key={file._id} file={file} />
      ))}
    </div>
  );
}
