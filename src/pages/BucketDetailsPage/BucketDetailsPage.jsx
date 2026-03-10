import { useParams } from "react-router-dom";
import BucketDetails from "../../components/BucketDetails";
import ErrorComponent from "../../components/ErrorComponent";
import Loading from "../../components/Loading";
import useBucket from "../../hooks/useBucket";

function BucketDetailsPage() {
  const { bucketId } = useParams();
  const { bucket, loading, error } = useBucket(bucketId);

  return (
    <>
      <Loading loading={loading} />
      <ErrorComponent error={error} />
      <BucketDetails bucket={bucket} />
    </>
  );
}

export default BucketDetailsPage;
