import { useTheme } from "../context/ThemeProvider";

const Card = ({
  box,
  graph,
  title,
  trending,
  amount,
  percentage,
  color,
  backgroundColor,
}: any) => {
  const { isDarkTheme, theme } = useTheme();
  return (
    <div
      style={{ backgroundColor: theme.background }}
      className="mt-2  p-2 rounded-2xl border border-[#EBECF2] max-h-[220px]  bg-[#FFFFFF]"
    >
      <div className="relative pt-5">
        <div className="flex flex-col gap-2">
          <div className="rounded-full w-[40px] h-[40px] border border-[#EBECF2] hover:bg-[#F7F8FA] cursor-pointer">
            <img src={box} className="py-2 px-2"></img>
          </div>

          <h3
            style={{ color: isDarkTheme ? theme.text : "#898989" }}
            className="text-[#898989] text-xl font-medium"
          >
            {title}
          </h3>
          <h2
            style={{ color: isDarkTheme ? theme.text : "#3A3F51" }}
            className="text-[#3A3F51] text-xl font-semibold"
          >
            {amount}
          </h2>
          <div className="flex justify-between gap-4">
            <div
              style={{ backgroundColor: backgroundColor }}
              className={`rounded-full  gap-2  px-2 py-1 flex`}
            >
              <img src={trending}></img>
              <p
                style={{ color: `#${color}` }}
                className={`text-sm font-semibold`}
              >
                {percentage}%
              </p>
            </div>
            <div
              style={{ color: isDarkTheme ? theme.text : "#606060" }}
              className="text-[#606060]"
            >
              vs. previous month
            </div>
          </div>
        </div>
        <img src={graph} className="absolute top-5 right-0"></img>
      </div>
    </div>
  );
};

export default Card;
