import axiosInstance from "./axiosInstance";

export const getFileDownloadUrl = async (filePath) => {
  const res = await axiosInstance.post("/files/generate-download-url", {
    filePath: filePath,
  });
  return res.data;
};

export const getFileUploadUrl = async (fileName) => {
  const res = await axiosInstance.post("/files/generate-upload-url", {
    fileName: fileName,
  });
  return res.data;
};
