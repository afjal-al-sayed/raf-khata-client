import axiosInstance from "./axiosInstance";

export const getBucketById = (bucketId) =>
  axiosInstance.get(`/buckets/${bucketId}`);
