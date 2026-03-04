import { Routes, Route } from "react-router-dom";
import BucketDetailsPage from "./pages/BucketDetailsPage/BucketDetailsPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:bucketId" element={<BucketDetailsPage />} />
    </Routes>
  );
}

export default App;
