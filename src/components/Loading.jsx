function Loading({ loading, message = "Loading Bucket..." }) {
  if (loading)
    return (
      <div className="fixed top-0 left-0 w-full h-screen bg-gray-100 flex items-center justify-center z-40">
        <div className="flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
          <p className="mt-4 text-gray-700 text-lg font-medium">{message}</p>
        </div>
      </div>
    );

  return null;
}

export default Loading;
