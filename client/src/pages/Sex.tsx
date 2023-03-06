import React from "react";
import Piesex from "../components/charts/Piesex";
import data from "../data/data.json";

// const data = [
//   {
//     id: "female",
//     label: "female",
//     value: 419,
//     color: "hsl(349, 75%, 44%)",
//   },

//   {
//     id: "male",
//     label: "male",
//     value: 578,
//     color: "hsl(231, 51%, 46%)",
//   },
// ];
const newData = data.reduce(
  (total, acc) => {
    acc.sex === "m" ? total[0].value++ : total[1].value++;
    return total;
  },
  [
    { id: "male", label: "male", value: 0, color: "hsl(349, 75%, 44%)" },
    { id: "female", label: "female", value: 0, color: "hsl(231, 51%, 46%)" },
  ]
);

const Sex = () => {
  return (
    <>
      <div className="min-h-screen">
        <h1 className="text-center text-secondary font-bold text-4xl">
          Sex Type
        </h1>
        <Piesex data={newData} />
      </div>
    </>
  );
};

export default Sex;
