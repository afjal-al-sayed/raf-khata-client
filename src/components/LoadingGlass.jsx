function LoadingGlass({ loading, message = "Creating New Bucket" }) {
  if (loading)
    return (
      <div className="fixed inset-0 z-45 flex items-center justify-center bg-black/30 backdrop-blur-md">
        <div className="flex flex-col items-center gap-5 px-10 py-8 rounded-2xl bg-white/70 shadow-xl backdrop-blur-xl">
          {/* Modern spinner */}
          <div className="relative w-14 h-14">
            <div className="absolute inset-0 rounded-full border-4 border-indigo-200"></div>
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-600 border-r-indigo-600 animate-spin"></div>
          </div>

          <div className="flex flex-col items-center gap-1">
            <p className="text-gray-800 font-semibold">{message}</p>
            <p className="text-sm text-gray-500 animate-pulse">
              Please wait...
            </p>
          </div>
        </div>
      </div>
    );
  return null;
}

export default LoadingGlass;
