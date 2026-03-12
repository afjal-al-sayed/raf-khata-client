import { useState } from "react";
import EditableTextList from "../../components/EditableTextList";
import TabsSlider from "../../components/TabsSlider";
import WelcomeBanner from "../../components/WelcomeBanner";

function HomePage() {
  return (
    <div>
      <WelcomeBanner />
      <TabsSlider
        tabs={[
          {
            title: "Notes",
            content: <EditableTextList />,
          },
          {
            title: "Files",
            content: <h1>Here goes files</h1>,
          },
        ]}
      />
    </div>
  );
}

export default HomePage;
