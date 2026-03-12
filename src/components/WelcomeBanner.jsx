import React from "react";

function WelcomeBanner() {
  return (
    <div className="w-full">
      <div className="w-full px-6 py-8 bg-gradient-to-b from-indigo-50 via-blue-50 to-white border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Welcome
          </h1>

          <p className="mt-2 text-gray-600 max-w-xl text-sm md:text-base leading-relaxed">
            Quickly share your ideas, snippets, notes and files.
          </p>
          <div className="mt-4 space-y-3 text-sm md:text-base">
            <div className="flex items-start gap-3">
              <span className="px-3 py-1 text-xs font-semibold rounded-md border border-blue-200 bg-blue-50 text-blue-700 whitespace-nowrap">
                Step-01
              </span>
              <p className="text-gray-700">
                Write / Paste your texts, Attach your files
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="px-3 py-1 text-xs font-semibold rounded-md border border-blue-200 bg-blue-50 text-blue-700 whitespace-nowrap">
                Step-02
              </span>
              <p className="text-gray-700">Create a new Bucket</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="px-3 py-1 text-xs font-semibold rounded-md border border-blue-200 bg-blue-50 text-blue-700 whitespace-nowrap">
                Step-03
              </span>
              <p className="text-gray-700">
                Share the URL to access from anywhere
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeBanner;
