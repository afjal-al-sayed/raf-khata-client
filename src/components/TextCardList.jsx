import { useState } from "react";

export default function TextCardList({ bucket }) {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [urlCopied, setUrlCopied] = useState(null);
  const { bucketShortId, textList: items } = bucket;

  const handleCopy = async (text, index) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);

    setTimeout(() => {
      setCopiedIndex(null);
    }, 1500);
  };

  const handleCopyUrl = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setUrlCopied(true);

    setTimeout(() => setUrlCopied(false), 1500);
  };

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

  const cardColors = [
    "bg-blue-50",
    "bg-purple-50",
    "bg-emerald-50",
    "bg-amber-50",
    "bg-rose-50",
    "bg-cyan-50",
  ];

  return (
    <div className="w-full px-4 py-6">
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

      {/* Card Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative border rounded-xl p-5 shadow-sm hover:shadow-md transition 
border-gray-100 ${cardColors[index % cardColors.length]}`}
          >
            <h3 className="font-semibold text-gray-800 mb-2 tracking-tight">
              {item.title || `Text no. ${index + 1}`}
            </h3>

            <p className="text-sm text-gray-600 whitespace-pre-wrap">
              {item.text}
            </p>

            {/* Copy Button */}
            <button
              onClick={() => handleCopy(item.body, index)}
              className="absolute bottom-4 right-4 flex items-center gap-1 text-xs 
  px-3 py-1.5 rounded-md bg-white/80 backdrop-blur 
  border border-gray-200 shadow-sm
  text-blue-600 hover:bg-blue-50 transition"
            >
              {copiedIndex === index ? "✓ Copied" : "📋 Copy"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
