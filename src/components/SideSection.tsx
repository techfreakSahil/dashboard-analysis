import box1 from "../assets/box-tick.png";
import green from "../assets/Group 3.png";
import trendingup from "../assets/trending-up.png";
import box2 from "../assets/box2icon.png";
import box3 from "../assets/boxicon3.png";
import box4 from "../assets/boxicon4.png";
import red from "../assets/Group 4.png";
import trendingdown from "../assets/trending-down.png";
import Card from "./Card";

interface Cards {
  id: number;
  box: string;
  highlight: string;
  title: string;
  trending: string;
  amount: number | string;
  percentage: number;
  backgroundColor: string;
  color: string;
}
type card = Cards;
const cardData: card[] = [
  {
    id: 1,
    box: box1,
    highlight: green,
    title: "Total Order",
    trending: trendingup,
    amount: 350,
    percentage: 23.5,
    backgroundColor: "rgba(52,202,165,0.12)",
    color: "rgb(52,202,165)",
  },
  {
    id: 2,
    box: box2,
    highlight: red,
    title: "Total Refund",
    trending: trendingdown,
    amount: 270,
    percentage: 23.5,
    color: "rgb(237,84,78)",
    backgroundColor: "rgba(237,84,78,0.12)",
  },
  {
    id: 3,
    box: box3,
    highlight: red,
    title: "Average Sales",
    trending: trendingdown,
    amount: 1567,
    percentage: 23.5,
    backgroundColor: "rgba(237,84,78,0.12)",
    color: "rgb(237,84,78)",
  },
  {
    id: 4,
    box: box4,
    highlight: green,
    title: "Total Income",
    trending: trendingup,
    amount: "$350.000",
    percentage: 23.5,
    backgroundColor: "rgba(52,202,165,0.12)",
    color: "rgb(52,202,165)",
  },
];

const SideSection = () => {
  return (
    <>
      <div className="w-[70%] mx-auto dekstop:w-[40%] tablet:w-[65%]  tablet:grid tablet:grid-cols-2 tablet:gap-5    dekstop:flex-row dekstop:gap-1  flex flex-col flex-wrap gap-2">
        {cardData.map((data) => (
          <Card
            key={data.id}
            box={data.box}
            graph={data.highlight}
            title={data.title}
            trending={data.trending}
            amount={data.amount}
            percentage={data.percentage}
            backgroundColor={data.backgroundColor}
            color={data.color}
          />
        ))}
      </div>
    </>
  );
};

export default SideSection;
//ED544E
