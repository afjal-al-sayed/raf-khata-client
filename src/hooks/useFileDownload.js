import axios from "axios";
import { useState } from "react";
import { getFileDownloadUrl } from "../api/fileService";

const useFileDownload = (file) => {
  const { path: filePath, name: fileName } = file;
  const [status, setStatus] = useState("idle"); // idle | loading | done
  const [error, setError] = useState(null);

  const downloadFile = async () => {
    try {
      if (!filePath) return;
      console.log(filePath);
      setError(null);
      setStatus("loading");

      const { downloadUrl } = await getFileDownloadUrl(filePath);
      await downloadFromSignedUrl({ url: downloadUrl, fileName });

      //console.log(downloadUrl);
      setStatus("done");
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      console.error(err);
      setError(err);
      setStatus("idle");
    }
  };

  const downloadFromSignedUrl = async ({ url, fileName = "download" }) => {
    console.log(url);
    const res = await axios.get(url, {
      responseType: "blob",
    });

    const blobUrl = window.URL.createObjectURL(res.data);

    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = fileName;

    a.click();
    window.URL.revokeObjectURL(blobUrl);
  };

  return { status, error, downloadFile };
};

export default useFileDownload;
