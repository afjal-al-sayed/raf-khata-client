import axios from "axios";
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

export const uploadFileToUrl = async (file, uploadUrl) => {
  const res = await axios.put(uploadUrl, file, {
    headers: {
      "Content-Type": file.type, // VERY important
    },
  });
  return res.data;
};
