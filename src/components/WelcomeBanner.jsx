import React from "react";

function WelcomeBanner() {
  return (
    <div className="w-full">
      <div className="w-full px-6 pt-10 pb-4 bg-gradient-to-b from-indigo-50 via-blue-50 to-white border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Welcome
          </h1>

          <p className="mt-3 text-gray-600 max-w-xl text-sm md:text-base leading-relaxed">
            Write or paste anything and create a bucket. A unique URL lets
            anyone access your saved notes, ideas, snippets, or links from
            anywhere.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WelcomeBanner;
