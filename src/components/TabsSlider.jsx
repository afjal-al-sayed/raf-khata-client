import { useState } from "react";

// tabs.title & tabs.content for component
export default function TabsSlider({ tabs }) {
  const [active, setActive] = useState(0);
  return (
    <div className="w-full max-w-7xl mx-auto mt-6">
      {/* Titles */}
      <div className="flex justify-center mb-6">
        <div className="flex gap-2 p-1.5 bg-gray-100 rounded-xl">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-10 py-3 text-base font-semibold rounded-lg transition-all ${
                active === i
                  ? "bg-white shadow-sm text-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      {/* Sliding content */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            width: `${tabs.length * 100}%`,
            transform: `translateX(-${active * (100 / tabs.length)}%)`,
          }}
        >
          {tabs.map((tab, i) => (
            <div key={i} style={{ width: `${100 / tabs.length}%` }}>
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
