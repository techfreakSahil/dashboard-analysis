import React, { useState } from "react";
import share from "../assets/Icon-1.png";
import setting from "../assets/Icon-2.png";
import exit from "../assets/Icon-3.png";

const icons = [share, setting, exit];

const OtherMenu = () => {
  const [selectedIcon, setSelectedIcon] = useState<string>();
  return (
    <div className="mb-10 ">
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
    </div>
  );
};

export default OtherMenu;
