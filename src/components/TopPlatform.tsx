import React from "react";
import { useTheme } from "../context/ThemeProvider";
import { platformData } from "../config";

const TopPlatform = () => {
  const { isDarkTheme, theme } = useTheme();
  return (
    <div
      style={{ backgroundColor: theme.background }}
      className="w-[70%] mx-auto rounded-2xl border border-[#EBECF2] m-2  dekstop:w-[40%] tablet:w-[65%]  dekstop:ml-1 dekstop:mr-2"
    >
      <div className="flex justify-between p-4">
        <h2
          style={{ color: isDarkTheme ? theme.text : "#26282C" }}
          className=" font-medium text-xl"
        >
          Top Platform
        </h2>
        <h3 className="text-[#34CAA5]  font-semibold text-xl ">See all</h3>
      </div>
      <div className="px-5">
        {platformData.map((data) => (
          <>
            <div
              key={data.id}
              style={{ color: isDarkTheme ? theme.text : "#26282C" }}
              className=" font-medium text-lg mb-3"
            >
              {data.name}
            </div>
            <div
              key={data.id}
              className="bg-[#F5F5F5] h-3 rounded-full relative"
            >
              <div
                key={data.id}
                style={{
                  backgroundColor: `#${data.color}`,
                  width: `${data.progress}`,
                }}
                className={`absolute h-3 rounded-full`}
              ></div>
            </div>
            <div key={data.id} className="flex justify-between mt-2 mb-1">
              <div key={data.id} className="text-gray-500 text-lg font-medium">
                {data?.amount}
              </div>
              <div key={data.id} className="text-gray-500 text-lg font-medium">
                {data.percentage}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default TopPlatform;
