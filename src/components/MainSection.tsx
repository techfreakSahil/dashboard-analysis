import SalesTrend from "./SalesTrend";
import { useTheme } from "../context/ThemeProvider";

const MainSection = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{ backgroundColor: theme.background }}
      className="w-[70%] mx-auto dekstop:w-[60%] tablet:w-[65%] dekstop:ml-2 border border-[#EBECF2]  m-2 mb-0  p-3 rounded-2xl"
    >
      <SalesTrend />
    </div>
  );
};

export default MainSection;
