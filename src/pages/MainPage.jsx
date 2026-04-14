import { useState } from "react";
import HeaderR from "../components/HeaderR";
import SideBar from "../components/SideBar";
import MainContent from "./MainContent";

const MainPage = () => {
  const [sidebar, setSidebar] = useState(true);
  const toggleSidebar = () => setSidebar((current) => !current);

  return (
    <>
      <HeaderR onMenuClick={toggleSidebar} />
      <div className="flex">
        <SideBar sidebar={sidebar} setSidebar={setSidebar} />
        <MainContent />
      </div>
    </>
  );
};

export default MainPage;
