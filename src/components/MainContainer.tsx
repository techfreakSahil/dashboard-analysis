import React from "react";
import Dashboard from "./Dashboard";
import MainSection from "./MainSection";
import SideSection from "./SideSection";
import TopPlatform from "./TopPlatform";
import LatestOrder from "./LatestOrder";

const MainContainer = () => {
  return (
    <div className="w-screen  bg-[#FAFAFA]">
      <Dashboard />
      <div className="ml-20 gap-2 dekstop:flex-row tablet:flex-col flex flex-col">
        <MainSection />
        <SideSection />
      </div>
      <div className=" ml-20 flex flex-col dekstop:flex-row">
        <LatestOrder />
        <TopPlatform />
      </div>
    </div>
  );
};

export default MainContainer;
