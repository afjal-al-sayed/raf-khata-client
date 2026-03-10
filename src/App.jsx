import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/NavBar";
import BucketDetailsPage from "./pages/BucketDetailsPage/BucketDetailsPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:bucketId" element={<BucketDetailsPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
