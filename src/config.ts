export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const dataSet = [
  6000, 12000, 3000, 28000, 8000, 45000, 9000, 25000, 35000, 4000, 30000, 28000,
];

export const options: any = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      displayColors: false,
      backgroundColor: "#090C2C",
      xAlign: "center",
      yAlign: "bottom",
      textAlign: "center",
      cornerRadius: 20,
      padding: 10,
      callbacks: {
        title: () => null,
        label: function (dataSet: any) {
          let label = dataSet.dataset.y || "";
          if (dataSet.parsed.y !== null) {
            label += new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(dataSet.parsed.y);
          }
          return label;
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
    y: {
      grid: {
        display: true,
      },
      border: {
        display: false,
        dash: [10],
      },
      min: 0,
      max: 50000,
      ticks: {
        stepSize: 10000,
      },
    },
  },
};

export const backgroundColorBar = [
  "rgba(52, 202, 165, 0.12)",
  "rgba(52, 202, 165, 0.12)",
  "rgba(52, 202, 165, 0.12)",
  "rgba(52, 202, 165, 0.12)",
  "rgba(52, 202, 165, 0.12)",
  "rgba(52, 202, 165,0.7)",
  "rgba(52, 202, 165, 0.12)",
  "rgba(52, 202, 165, 0.12)",
  "rgba(52, 202, 165, 0.12)",
  "rgba(52, 202, 165, 0.12)",
  "rgba(52, 202, 165, 0.12)",
  "rgba(52, 202, 165, 0.12)",
];

export const platformData = [
  {
    id: 1,
    name: "Book Bazaar",
    progress: "50%",
    amount: "$2,500,000",
    percentage: "15%",
    color: "6160DC",
  },
  {
    id: 2,
    name: "Artison Aisle",
    progress: "80%",
    amount: "$1,800,000",
    percentage: "10%",
    color: "54C5EB",
  },
  {
    id: 3,
    name: "Tony Troop",
    progress: "40%",
    amount: "$1,20,000",
    percentage: "8%",
    color: "FFB74A",
  },
  {
    id: 4,
    name: "XStore",
    progress: "20%",
    amount: "$2,500,000",
    percentage: "15%",
    color: "FF4A55",
  },
];
