function CreateBucketButton({ onClick }) {
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center pb-6 pt-5 backdrop-blur-xl bg-gradient-to-t from-white/80 via-white/50 to-transparent z-50">
      <button
        onClick={onClick}
        className="px-10 py-3 rounded-2xl
    bg-indigo-500/85 hover:bg-indigo-500/95
    text-white font-medium
    border border-indigo-400/30
    shadow-lg shadow-indigo-500/15
    transition-all duration-200
    hover:-translate-y-0.5 active:scale-[0.97]"
      >
        Create Bucket
      </button>
    </div>
  );
}

export default CreateBucketButton;
