import CONFIG from "../config";

export const getSavedBucketId = () =>
  localStorage.getItem(CONFIG.LOCAL_STORAGE_KEYS.BUCKET_ID);

export const saveBucketId = (bucketId) => {
  localStorage.setItem(CONFIG.LOCAL_STORAGE_KEYS.BUCKET_ID, bucketId);
};

export const removeSavedBucketId = () => {
  localStorage.removeItem(CONFIG.LOCAL_STORAGE_KEYS.BUCKET_ID);
};
