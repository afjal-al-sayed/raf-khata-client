import { useState } from "react";

function BucketHeader({ bucket }) {
  const [urlCopied, setUrlCopied] = useState(null);
  const { bucketShortId, textList: items } = bucket;

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      await navigator.share({
        title: document.title,
        url,
      });
    } else {
      await navigator.clipboard.writeText(url);
      setUrlCopied(true);
      setTimeout(() => setUrlCopied(false), 1500);
    }
  };

  const handleCopyUrl = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setUrlCopied(true);

    setTimeout(() => setUrlCopied(false), 1500);
  };

  return (
    <>
      {/* Header */}
      <div className="mb-8 pb-4 border-b border-gray-300">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
            Bucket ID: {bucketShortId}
          </h1>
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium 
rounded-lg bg-blue-600 text-white 
hover:bg-blue-700 active:scale-[0.98] 
shadow-sm transition"
          >
            {urlCopied ? "Copied!" : "➤ Share"}
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-1 font-medium">
          {items.length} items in this bucket
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Go to{" "}
          <a
            href={window.location.href}
            className="font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded 
hover:bg-blue-100 hover:underline break-all transition"
          >
            {window.location.href}
          </a>{" "}
          to access this bucket
        </p>
      </div>
    </>
  );
}

export default BucketHeader;
