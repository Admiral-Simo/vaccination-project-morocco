import React from "react";
import Piesex from "../components/charts/Piesex";

const data = [
  {
    id: "female",
    label: "female",
    value: 419,
    color: "hsl(349, 75%, 44%)",
  },

  {
    id: "male",
    label: "male",
    value: 578,
    color: "hsl(231, 51%, 46%)",
  },
];

const Dashboard = () => {
  return (
    <div className="w-full p-2 bg-primary1">
      <Piesex data={data} />
    </div>
  );
};

export default Dashboard;
