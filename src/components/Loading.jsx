const styles = {
  overlay: {
    position: "fixed",
    left: 0,
    top: "80px",
    height: `calc(100vh - 80px)`,
    width: "100vw",
    background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  spinner: {
    width: 80,
    height: 80,
    border: "12px solid #fff",
    borderTop: "12px solid #ff6b6b",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  text: {
    marginTop: 20,
    color: "#fff",
    fontSize: 20,
    fontWeight: 600,
    fontFamily: "Arial, sans-serif",
  },
};

function Loading({ loading, message = "Loading Bucket..." }) {
  if (loading)
    return (
      <div className="fixed top-0 left-0 w-full h-screen bg-gray-100 flex items-center justify-center z-40">
        <div className="flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
          <p className="mt-4 text-gray-700 text-lg font-medium">
            Loading Bucket...
          </p>
        </div>
      </div>
    );

  return null;
}

export default Loading;
