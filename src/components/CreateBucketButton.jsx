function CreateBucketButton({ onClick }) {
  return (
    <div className="col-span-full flex flex-col items-center gap-4 pb-6">
      <button
        onClick={onClick}
        className="px-8 py-3 rounded-xl bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-medium transition shadow-sm"
      >
        Create Bucket
      </button>
    </div>
  );
}

export default CreateBucketButton;
