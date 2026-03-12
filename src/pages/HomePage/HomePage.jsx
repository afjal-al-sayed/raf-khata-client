import { useRef, useState } from "react";
import CreateBucketButton from "../../components/CreateBucketButton";
import EditableTextList from "../../components/EditableTextList";
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
      <div className={`${loading ? "pointer-events-none opacity-70" : ""}`}>
        <WelcomeBanner />
        <TabsSlider
          tabs={[
            {
              title: "Notes",
              content: <EditableTextList ref={notesRef} />,
            },
            {
              title: "Files",
              content: <h1>Here goes files</h1>,
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
