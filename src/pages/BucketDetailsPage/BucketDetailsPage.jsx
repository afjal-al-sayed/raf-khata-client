import { useParams } from "react-router-dom";
import useBucket from "../../hooks/useBucket";

function BucketDetailsPage() {
  const { bucketId } = useParams();
  const { bucket, loading } = useBucket(bucketId);

  if (loading) {
    return (
      <div>
        <h1>Loading.....</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>This is details of bucket with id {bucketId}</h1>
      <p>Expires in: {bucket.expiresAfter}</p>
    </div>
  );
}

export default BucketDetailsPage;
