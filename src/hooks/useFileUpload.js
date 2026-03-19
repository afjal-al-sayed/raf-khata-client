import { useState } from "react";
import { getFileUploadUrl, uploadFileToUrl } from "../api/fileService";

const useFileUpload = ({ globalLoading, setGlobalLoading, setFiles }) => {
  const [error, setError] = useState(null);

  const uploadFile = async (file) => {
    if (globalLoading) return;
    try {
      setGlobalLoading(true);
      setFiles((prev) =>
        prev.map((f) => (f.id === file.id ? { ...f, loading: true } : f))
      );

      const { path, uploadUrl } = await getFileUploadUrl(file.name);
      await uploadFileToUrl(file.file, uploadUrl);

      //console.log(data);

      setFiles((prev) =>
        prev.map((f) =>
          f.id === file.id ? { ...f, uploaded: true, path: path } : f
        )
      );
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setFiles((prev) =>
        prev.map((f) => (f.id === file.id ? { ...f, loading: false } : f))
      );
      setGlobalLoading(false);
    }
  };

  return { error, uploadFile };
};

export default useFileUpload;
