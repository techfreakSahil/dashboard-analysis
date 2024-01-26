import React from "react";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import search from "../assets/searchicon.png";
import profile from "../assets/Profile.png";
import arrow from "../assets/Arrow---Down-2.png";
import { useTheme } from "../context/ThemeProvider";

const Dashboard = () => {
  const { isDarkTheme, theme } = useTheme();
  return (
    <div
      style={{ backgroundColor: theme.background }}
      className="flex px-5  border-b-[1px] border-b-[#EBECF2] py-3 justify-between content-center"
    >
      <h1
        style={{ color: isDarkTheme ? theme.text : "#26282C" }}
        className=" ml-20 font-semibold pt-1  text-2xl"
      >
        Dashboard
      </h1>
      <div className="flex  justify-center align-baseline gap-5">
        <div className="relative">
          <input
            type="text"
            className="relative rounded-full w-[40px] dekstop:w-[315px] dekstop:px-9 tablet:w-[150px] tablet:px-9 border border-[#EBECF2] bg-[#FFFFFF] px-4 py-2"
            placeholder="Search..."
          ></input>
          <img
            src={search}
            height={17}
            width={17}
            className="absolute inset-3"
          ></img>
        </div>

        <div className="py-2 flex gap-2">
          <MdOutlineCalendarMonth size={20} />
          <p
            style={{ color: isDarkTheme ? theme.text : "#26282C" }}
            className=" text-sm font-medium pb-1 tablet:block hidden dekstop:block"
          >
            November 15, 2023
          </p>
        </div>
        <div className="rounded-full border border-[#EBECF2] px-3 py-2 -mt-1 hover:bg-[#F7F8FA] cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4 8a8 8 0 1 1 16 0v4.697l2 3V20h-5.611a4.502 4.502 0 0 1-8.777 0H2v-4.303l2-3zm5.708 12a2.5 2.5 0 0 0 4.584 0zM12 2a6 6 0 0 0-6 6v5.303l-2 3V18h16v-1.697l-2-3V8a6 6 0 0 0-6-6"
            />
          </svg>
        </div>
        <div className=" -mt-1 relative rounded-full border border-[#EBECF2] px-2 w-[48px] dekstop:w-[210px]">
          <img src={profile} className="absolute inset-1 inset-x-1"></img>

          <div
            style={{ color: isDarkTheme ? theme.text : "#26282C" }}
            className="absolute hidden  dekstop:block inset-x-12  text-md font-medium"
          >
            Justin Bergson
          </div>
          <div
            style={{ color: isDarkTheme ? "#d6d5d8" : "#787486" }}
            className="absolute hidden dekstop:block inset-y-5 inset-12 text-sm font-normal"
          >
            Justin@gmail.com
          </div>
          <img
            src={arrow}
            height={8}
            width={14}
            className="absolute hidden dekstop:block right-2 bottom-4"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
