import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart(props) {
  function calculateData(arr) {
    let [excellent, good, poor] = [0, 0, 0];
    arr.forEach((x) => {
      if (x.rating === 4 || x.rating === 5) {
        excellent++;
      } else if (x.rating === 2 || x.rating === 3) {
        good++;
      } else {
        poor++;
      }
    });
    return [excellent, good, poor];
  }
  const data = {
    labels: ["Excellent", "Good", "Poor"],
    datasets: [
      {
        label: "# of Votes",
        data: calculateData(props.data),
        backgroundColor: [
          "rgba(255, 206, 86, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgba(255, 206, 86, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 3,
      },
    ],
  };
  return <Doughnut data={data} />;
}
