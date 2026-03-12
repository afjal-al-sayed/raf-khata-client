import { useRef, useState } from "react";
import CreateBucketButton from "../../components/CreateBucketButton";
import EditableTextList from "../../components/EditableTextList";
import EditableFileList from "../../components/EditableFileList";
import LoadingGlass from "../../components/LoadingGlass";
import TabsSlider from "../../components/TabsSlider";
import WelcomeBanner from "../../components/WelcomeBanner";

function HomePage() {
  const loading = false;
  const notesRef = useRef();

  const handleSubmit = () => {
    const notes = notesRef.current.validateNotes();
  };

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
