import { useState } from "react";

const useFileUpload = ({ globalLoading, setGlobalLoading, setFiles }) => {
  const [error, setError] = useState(null);
  const uploadFile = async (file) => {
    if (globalLoading) return;
    try {
      setGlobalLoading(true);
      setFiles((prev) =>
        prev.map((f) => (f.id === file.id ? { ...f, loading: true } : f))
      );

      // simulate API call
      await new Promise((res) => setTimeout(res, 1500));

      setFiles((prev) =>
        prev.map((f) => (f.id === file.id ? { ...f, uploaded: true } : f))
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
