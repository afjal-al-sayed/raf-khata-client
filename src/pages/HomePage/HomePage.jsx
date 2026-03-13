import { useEffect, useRef, useState } from "react";
import CreateBucketButton from "../../components/CreateBucketButton";
import EditableTextList from "../../components/EditableTextList";
import EditableFileList from "../../components/EditableFileList";
import LoadingGlass from "../../components/LoadingGlass";
import TabsSlider from "../../components/TabsSlider";
import WelcomeBanner from "../../components/WelcomeBanner";
import useNewBucket from "../../hooks/useNewBucket";
import { showErrorToast } from "../../utils/uiErrorHandler";
import { useNavigate } from "react-router-dom";
import {
  getSavedBucketId,
  saveBucketId,
} from "../../utils/localStorageHandler";

function HomePage() {
  const [savedBucketId, setSavedBucketId] = useState(getSavedBucketId());
  const { loading, error, createNewBucket } = useNewBucket(setSavedBucketId);
  const notesRef = useRef();
  const navigate = useNavigate();

  // redirect if id exists
  useEffect(() => {
    if (savedBucketId) {
      saveBucketId(savedBucketId);
      navigate(`/${savedBucketId}`, { replace: true });
    }
  }, [savedBucketId]);

  const handleSubmit = () => {
    const notes = notesRef.current.validateNotes();
    if (!notes) return;
    //console.log(notes);
    createNewBucket(notes);
  };

  useEffect(() => {
    if (error) showErrorToast(error);
  }, [error]);

  return (
    <>
      <div
        className={`pb-24 ${loading ? "pointer-events-none opacity-70" : ""}`}
      >
        <WelcomeBanner />
        <TabsSlider
          tabs={[
            {
              title: "Notes",
              content: <EditableTextList ref={notesRef} />,
            },
            {
              title: "Files",
              content: <EditableFileList />,
            },
          ]}
        />
        <CreateBucketButton onClick={handleSubmit} />
      </div>
      <LoadingGlass loading={loading} />
    </>
  );
}

export default HomePage;
