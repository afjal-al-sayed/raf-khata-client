import { useParams } from "react-router-dom";
import useBucket from "../../hooks/useBucket";

function BucketDetailsPage() {
  const { bucketId } = useParams();
  const { bucket } = useBucket(bucketId);
  return (
    <div>
      <h1>This is details of bucket with id {bucketId}</h1>
      <p>{JSON.stringify(bucket)}</p>
    </div>
  );
}

export default BucketDetailsPage;
