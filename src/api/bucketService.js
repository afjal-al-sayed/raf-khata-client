import axiosInstance from "./axiosInstance";

export const getBucketById = async (bucketId) => {
  const res = await axiosInstance.get(`/buckets/${bucketId}`);
  return res.data?.data; // first data is the content inside a repesponse , 2nd data is my server wraps in data: {}
};

export const createNewBucket = async (textList, fileList) => {
  // takes a body witch includes
  // post { textList: [ { text: "body", title: "title"} ]}
  //   "fileList": [
  //     {
  //       "name": "hello.jpg",
  //       "path": "uploads/hello.jpg",
  //       "size": 8640
  //   }
  // ]
  const res = await axiosInstance.post("/buckets/", {
    textList: textList,
    fileList: fileList,
  });
  return res.data?.data;
};
