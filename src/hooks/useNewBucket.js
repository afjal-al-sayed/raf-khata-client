import { useEffect, useState } from "react";
import * as bucketService from "../api/bucketService";

const useNewBucket = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createNewBucket = async (textList) => {
    try {
      if (!textList || textList?.length === 0) return;
      setError(null);
      setLoading(true);
      const formattedTextList = textList.map((item) => ({
        title: item.title,
        text: item.body,
      }));
      console.log(formattedTextList);
      const newBucket = await bucketService.createNewBucket(formattedTextList);
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
