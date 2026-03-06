import { useParams } from "react-router-dom";
import BucketDetails from "../../components/BucketDetails";
import ErrorToast from "../../components/ErrorToast";
import useBucket from "../../hooks/useBucket";
import { showError } from "../../utils/uiErrorHandler";

function BucketDetailsPage() {
  const { bucketId } = useParams();
  const { bucket, loading, error } = useBucket(bucketId);

  if (loading) {
    return (
      <div>
        <h1>Loading.....</h1>
      </div>
    );
  }

  return (
    <>
      <ErrorToast error={error} />
      <BucketDetails bucket={bucket} />
    </>
  );
}

export default BucketDetailsPage;
