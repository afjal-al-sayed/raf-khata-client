import { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Upload, Check } from "lucide-react";
import useFileUpload from "../hooks/useFileUpload";
import { showErrorToast } from "../utils/uiErrorHandler";

export default function EditableFileList() {
  const [files, setFiles] = useState([]);
  const [globalLoading, setGlobalLoading] = useState(false);
  const fileInputRef = useRef(null);
  const { error, uploadFile } = useFileUpload({
    globalLoading,
    setGlobalLoading,
    setFiles,
  });

  useEffect(() => {
    if (error) showErrorToast(error);
  }, [error]);

  const handleAddFiles = (e) => {
    const selectedFiles = Array.from(e.target.files);

    const newFiles = selectedFiles.map((file) => ({
      id: uuidv4(),
      file,
      name: file.name,
      size: file.size,
      uploaded: false,
      loading: false,
    }));

    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleDelete = (id) => {
    if (globalLoading) return;
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const formatSize = (bytes) => {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <input
        type="file"
        multiple
        ref={fileInputRef}
        className="hidden"
        onChange={handleAddFiles}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {files.map((f) => (
          <div
            key={f.id}
            className="bg-white border border-gray-200 rounded-2xl p-4 shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow"
          >
            <div>
              <p className="font-semibold text-sm break-words break-all whitespace-pre-wrap">
                {f.name}
              </p>
              <p className="text-xs text-gray-500 mt-1">{formatSize(f.size)}</p>
            </div>

            <div className="flex justify-end items-center gap-2 mt-4">
              {f.uploaded ? (
                <button
                  className="px-3 py-1 rounded-lg text-sm bg-green-100 text-green-600 flex items-center gap-1 cursor-not-allowed"
                  disabled
                >
                  <Check size={16} />
                </button>
              ) : (
                <button
                  onClick={() => uploadFile(f)}
                  disabled={globalLoading}
                  className={`px-3 py-1 rounded-lg text-sm bg-blue-500 text-white hover:bg-blue-600 flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {f.loading ? (
                    "Uploading..."
                  ) : (
                    <>
                      <Upload size={16} /> Upload
                    </>
                  )}
                </button>
              )}

              <button
                onClick={() => handleDelete(f.id)}
                disabled={globalLoading}
                className="px-2 py-1 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ✕
              </button>
            </div>
          </div>
        ))}

        {/* Add More Card */}
        <div
          onClick={() => fileInputRef.current.click()}
          className="border-2 border-dashed border-gray-300 rounded-2xl p-6 flex items-center justify-center text-lg font-medium text-gray-400 hover:bg-gray-50 cursor-pointer transition-shadow shadow-md hover:shadow-lg"
        >
          + Add Files
        </div>
      </div>
    </div>
  );
}
