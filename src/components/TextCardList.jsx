import { useState } from "react";

export default function TextCardList({ bucket }) {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const { textList: items } = bucket;

  const handleCopy = async (text, index) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);

    setTimeout(() => {
      setCopiedIndex(null);
    }, 1500);
  };

  const cardColors = [
    "bg-blue-50",
    "bg-purple-50",
    "bg-emerald-50",
    "bg-amber-50",
    "bg-rose-50",
    "bg-cyan-50",
  ];

  if (items.length === 0) return null;

  return (
    <>
      {/* Card Grid */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
    </>
  );
}
