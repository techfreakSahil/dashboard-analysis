import React from "react";
import MainMenu from "./MainMenu";
import OtherMenu from "./OtherMenu";
import { useTheme } from "../context/ThemeProvider";

const Sidebar = () => {
  const { theme } = useTheme();
  console.log(theme.background);
  return (
    <div
      style={{ backgroundColor: theme.background }}
      className="min-h-screen fixed w-15 z-30 flex flex-col  border-r-[1px] shadow-sm border-r-[#EBECF2] justify-between"
    >
      <MainMenu />
      <OtherMenu />
    </div>
  );
};

export default Sidebar;
