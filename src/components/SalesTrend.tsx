import React, { useState } from "react";
import arrow from "../assets/Arrow---Down-2.png";
import bar from "../assets/Bar.png";
import dot from "../assets/Line.png";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Calendar from "react-calendar";
import { months, dataSet, options, backgroundColorBar } from "../config";
import {
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useTheme } from "../context/ThemeProvider";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SalesTrend = () => {
  const { isDarkTheme, theme } = useTheme();
  const [userData, setUserData] = useState({
    labels: months.map((month) => month),
    datasets: [
      {
        data: dataSet,
        borderRadius: [50],
        backgroundColor: backgroundColorBar,
      },
    ],
  });
  return (
    <>
      <div className="flex justify-between">
        <h2
          style={{ color: isDarkTheme ? theme.text : "#26282C" }}
          className=" font-medium text-xl"
        >
          Sales Trends
        </h2>
        <div className="flex gap-4">
          <h3
            style={{ color: isDarkTheme ? theme.text : "#3A3F51" }}
            className=" font-medium text-md hidden tablet:block"
          >
            Sort by:
          </h3>
          <div className="relative rounded-full border border-[#EBECF2]">
            <div
              style={{ color: isDarkTheme ? theme.text : "" }}
              className="px-1 pr-2 py-0 tablet:px-4 tablet:pr-8 tablet:py-1"
            >
              Weekly
            </div>
            <img
              className="absolute hidden tablet:block right-3 bottom-3"
              src={arrow}
            />
          </div>
        </div>
      </div>
      <div className="pt-3 w-full h-full">
        <Bar data={userData} options={options} />
      </div>
    </>
  );
};

export default SalesTrend;
