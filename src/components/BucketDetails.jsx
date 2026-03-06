function BucketDetails({ bucket }) {
  if (!bucket) return null;
  return (
    <>
      <div>
        <h1>This is details of bucket with id {bucket.bucketShortId}</h1>
        <p>Expires in: {bucket.expiresAfter}</p>
      </div>
    </>
  );
}

export default BucketDetails;
