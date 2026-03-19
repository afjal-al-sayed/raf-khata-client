import { useEffect, useState } from "react";
import * as bucketService from "../api/bucketService";

const useNewBucket = (setSavedBucketId) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createNewBucket = async (textList, filelist) => {
    try {
      setError(null);
      setLoading(true);

      const formattedTextList = textList.map((item) => ({
        title: item.title,
        text: item.body,
      }));
      console.log(formattedTextList);

      const formattedFileList = filelist.map((item) => ({
        name: item.name,
        size: item.size,
        path: item.path,
      }));
      console.log(formattedFileList);

      const newBucket = await bucketService.createNewBucket(
        formattedTextList,
        formattedFileList
      );

      setSavedBucketId(newBucket.bucketShortId);
      console.log(newBucket);
    } catch (error) {
      console.error("newBucketHook: ", error.message);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, createNewBucket };
};

export default useNewBucket;
