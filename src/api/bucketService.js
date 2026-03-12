import axiosInstance from "./axiosInstance";

export const getBucketById = async (bucketId) => {
  const res = await axiosInstance.get(`/buckets/${bucketId}`);
  return res.data?.data; // first data is the content inside a repesponse , 2nd data is my server wraps in data: {}
};

export const createNewBucket = async (textList) => {
  // takes a body witch includes
  const res = await axiosInstance.post("/buckets/", body);
  return res.data?.data;
};
