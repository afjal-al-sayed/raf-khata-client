import { AlertTriangle, RefreshCcw, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { removeSavedBucketId } from "../utils/localStorageHandler";

export default function ErrorScreen({ error }) {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate(0);
  };

  const goToHome = () => {
    console.log(parseInt(error.status));
    removeSavedBucketId();
    navigate("/");
  };

  if (error)
    return (
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-orange-50 px-6">
        <div className="max-w-lg w-full text-center relative">
          {/* Graphic */}
          <div className="flex justify-center mb-6">
            <div className="bg-red-100 p-6 rounded-full shadow-lg">
              <AlertTriangle className="w-12 h-12 text-red-500" />
            </div>
          </div>

          {/* Error Code */}
          <h1 className="text-7xl font-extrabold text-red-500 tracking-tight">
            {error.status}
          </h1>

          {/* Title */}
          <h2 className="mt-4 text-2xl font-semibold text-gray-800">
            Unexpected Error
          </h2>

          {/* Message */}
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            {error.message}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={handleRetry}
              className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-6 py-3 text-white font-medium shadow-md transition hover:bg-red-600 hover:shadow-lg"
            >
              <RefreshCcw className="w-4 h-4" />
              Retry
            </button>

            <button
              onClick={goToHome}
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3 text-gray-700 font-medium shadow-sm transition hover:bg-gray-100"
            >
              <Home className="w-4 h-4" />
              Go to Home
            </button>
          </div>

          {/* Decorative glow */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-red-200 opacity-20 blur-3xl rounded-full -z-10" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-200 opacity-20 blur-3xl rounded-full -z-10" />
        </div>
      </div>
    );
  return null;
}
