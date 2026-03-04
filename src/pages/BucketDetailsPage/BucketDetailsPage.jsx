import { useParams } from "react-router-dom";

function BucketDetailsPage() {
  const { bucketId } = useParams();
  return <h1>This is details of bucket with id {bucketId}</h1>;
}

export default BucketDetailsPage;
