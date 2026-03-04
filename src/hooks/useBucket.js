import { useEffect, useState } from "react";
import * as bucketService from "../api/bucketService";

const useBucket = (bucketId) => {
  const [bucket, setBucket] = useState(null);
  const getBucketById = async (bucketId) => {
    console.log("here");
    const res = await bucketService.getBucketById(bucketId);
    setBucket(res.data);
  };

  // every time bucketId change fires the get bucket hook;
  useEffect(() => {
    getBucketById(bucketId);
  }, [bucketId]);

  return { bucket };
};

export default useBucket;
