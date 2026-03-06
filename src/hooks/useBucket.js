import { useEffect, useState } from "react";
import * as bucketService from "../api/bucketService";

const useBucket = (bucketId) => {
  const [bucket, setBucket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getBucketById = async (bucketId) => {
    try {
      setLoading(true);
      const bucket = await bucketService.getBucketById(bucketId);
      setBucket(bucket);
    } catch (error) {
      console.error("bucketHook: ", error.message);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // every time bucketId change fires the get bucket hook;
  useEffect(() => {
    getBucketById(bucketId);
  }, [bucketId]);

  return { bucket, loading, error };
};

export default useBucket;
