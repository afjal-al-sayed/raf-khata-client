import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import BucketDetailsPage from "./pages/BucketDetailsPage/BucketDetailsPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <h1>Navbar.</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:bucketId" element={<BucketDetailsPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
