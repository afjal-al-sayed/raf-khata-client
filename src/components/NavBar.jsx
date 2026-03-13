import { useNavigate, useLocation } from "react-router-dom";
import { removeSavedBucketId } from "../utils/localStorageHandler";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToHome = () => {
    removeSavedBucketId();
    navigate("/");
  };

  const isHome = location.pathname === "/";
  return (
    <nav className="w-full z-50 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md py-4 px-6 relative flex items-center justify-between">
      <h1 className="text-white text-2xl font-semibold">Raf Khata</h1>

      {!isHome && (
        <button
          onClick={goToHome}
          className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-blue-600 font-semibold shadow-sm transition hover:shadow-md hover:bg-blue-50"
        >
          <span className="text-lg leading-none">+</span>
          New Bucket
        </button>
      )}
    </nav>
  );
};

export default Navbar;
