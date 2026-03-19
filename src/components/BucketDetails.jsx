import BucketHeader from "./BucketHeader";
import FileCardList from "./FileCardList";
import TextCardList from "./TextCardList";

function BucketDetails({ bucket }) {
  if (!bucket) return null;
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-6">
      <BucketHeader bucket={bucket} />
      <TextCardList bucket={bucket} />
      <FileCardList />
    </div>
  );
}

export default BucketDetails;
