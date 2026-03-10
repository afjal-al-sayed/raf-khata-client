import TextCardList from "./TextCardList";

function BucketDetails({ bucket }) {
  if (!bucket) return null;
  return (
    <>
      <div>
        {/* <h1>This is details of bucket with id {bucket.bucketShortId}</h1> */}
        <TextCardList bucket={bucket} />
      </div>
    </>
  );
}

export default BucketDetails;
