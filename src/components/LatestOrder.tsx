import React from "react";
import pic1 from "../assets/pic1.png";
import view from "../assets/document-download.svg";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";
import { useTheme } from "../context/ThemeProvider";

const datas = [
  {
    id: 1,
    pic: pic1,
    name: "Marcus Bergson",
    data: "15 Nov,2023",
    amount: "$80,000",
    status: "Paid",
    color: "#34CAA5",
  },
  {
    id: 2,
    pic: pic2,
    name: "Jaydon Veccaro",
    data: "15 Nov,2023",
    amount: "$150,000",
    status: "Refund",
    color: "#ED544E",
  },
  {
    id: 3,
    pic: pic3,
    name: "Corie Schliefer",
    data: "14 Nov,2023",
    amount: "$87,000",
    status: "Paid",
    color: "#34CAA5",
  },
  {
    id: 4,
    pic: pic4,
    name: "Cooper Press",
    data: "14 Nov,2023",
    amount: "$100,000",
    status: "Refund",
    color: "#ED544E",
  },
  {
    id: 5,
    pic: pic4,
    name: "Phillip Lubin",
    data: "13 Nov,2023",
    amount: "$78,000",
    status: "Paid",
    color: "#34CAA5",
  },
];

const Name = ({ isDarkTheme, theme }: any) => {
  return (
    <>
      {datas.map((data) => (
        <>
          <div className="my-4 py-1 flex gap-2">
            <img src={data.pic}></img>
            <div
              style={{ color: isDarkTheme ? theme.text : "#3A3F51" }}
              className="pt-1 font-medium"
            >
              {data.name}
            </div>
          </div>
        </>
      ))}
    </>
  );
};

const Date = () => {
  return (
    <>
      {datas.map((data) => (
        <>
          <div className="my-4 py-2 text-gray-500 font-medium text-md">
            {data.data}
          </div>
        </>
      ))}
    </>
  );
};

const Amount = () => {
  return (
    <>
      {datas.map((data) => (
        <>
          <div className="my-4 py-2 text-[#0D062D] text-md font-medium">
            {data.amount}
          </div>
        </>
      ))}
    </>
  );
};

const Status = () => {
  return (
    <>
      {datas.map((data) => (
        <>
          <div
            style={{ color: data?.color }}
            className={`my-4 py-2  font-medium`}
          >
            {data.status}
          </div>
        </>
      ))}
    </>
  );
};

const View = ({ isDarkTheme, theme }: any) => {
  return (
    <>
      {datas.map((data) => (
        <>
          <div className="my-4 py-3 flex pt-2">
            <img src={view}></img>
            <div
              style={{ color: isDarkTheme ? theme.text : "#0D062D" }}
              className=" text-sm pl-1"
            >
              View
            </div>
          </div>
        </>
      ))}
    </>
  );
};

const LatestOrder = () => {
  const { isDarkTheme, theme } = useTheme();
  return (
    <div
      style={{ backgroundColor: theme.background }}
      className="w-[70%] mx-auto rounded-2xl border border-[#EBECF2] m-2  overflow-x-hidden dekstop:overflow-hidden tablet:w-[65%] dekstop:w-[60%] dekstop:m-2"
    >
      <div className="flex justify-between p-3 px-8">
        <h2
          style={{ color: isDarkTheme ? theme.text : "#26282C" }}
          className=" font-medium text-xl"
        >
          Latest Order
        </h2>
        <h3 className="text-[#34CAA5]  font-semibold text-xl ">See all</h3>
      </div>
      <div className="min-w-[200px] px-5 overflow-x-auto scrollable dekstop:w-full dekstop:overflow-hidden">
        <div className="w-[800px] grid grid-flow-col  p-3 text-[#9CA4AB] text-md mr-2 dekstop:w-full">
          <div
            style={{ color: isDarkTheme ? theme.text : "#3A3F51" }}
            className="col-span-3"
          >
            Name
            <div className="w-full my-2 h-[1px] bg-[#EDF2F6]"></div>
            <Name isDarkTheme={isDarkTheme} theme={theme} />
          </div>
          <div className="grid grid-flow-col col-span-4">
            <div
              style={{ color: isDarkTheme ? theme.text : "#3A3F51" }}
              className="col-span-1"
            >
              Date
              <div className="w-full my-2  h-[1px] bg-[#EDF2F6]"></div>
              <Date />
            </div>
            <div
              style={{ color: isDarkTheme ? theme.text : "#3A3F51" }}
              className="col-span-1"
            >
              Amount
              <div className="w-full my-2  h-[1px] bg-[#EDF2F6]"></div>
              <Amount />
            </div>
            <div
              style={{ color: isDarkTheme ? theme.text : "#3A3F51" }}
              className="col-span-1"
            >
              Status
              <div className="w-full my-2  h-[1px] bg-[#EDF2F6]"></div>
              <Status />
            </div>
            <div
              style={{ color: isDarkTheme ? theme.text : "#3A3F51" }}
              className="col-span-1"
            >
              Invoice
              <div className="w-full my-2  h-[1px] bg-[#EDF2F6]"></div>
              <View isDarkTheme={isDarkTheme} theme={theme} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestOrder;
