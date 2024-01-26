import React, { useState } from "react";
import logo from "../assets/Vector.png";
import menu from "../assets/Frame 12.png";
import share from "../assets/Frame 12-1.png";
import contact from "../assets/Icon.png";
import offer from "../assets/Frame 12-3.png";
import restriction from "../assets/Frame 12-4.png";
import thame from "../assets/Thame.png";
import { useTheme } from "../context/ThemeProvider";

const icons = [menu, share, contact, contact, offer, restriction];

const MainMenu = () => {
  const { toggleTheme } = useTheme();
  const [selectedIcon, setSelectedIcon] = useState<string>(menu);
  return (
    <div className="py-2 px-4  ">
      <img src={logo}></img>
      {icons.map((icon) => (
        <div className=" mt-2 relative">
          <img
            src={icon}
            onClick={() => setSelectedIcon(icon)}
            className="hover:cursor-pointer"
          ></img>
          {selectedIcon === icon ? (
            <div className=" absolute -right-4 bottom-3 h-5 w-1 rounded-l-lg bg-black"></div>
          ) : (
            ""
          )}
        </div>
      ))}
      <img src={thame} onClick={toggleTheme} className="mt-2 mb-1"></img>
    </div>
  );
};

export default MainMenu;
