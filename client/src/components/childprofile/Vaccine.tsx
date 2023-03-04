import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentChild } from "../../redux/features/childSlice";
import { vaccineScheduler } from "../../utils/vaccineSchedule";

interface Props {
  title: string;
  value: string;
}

const Vaccine = ({ title, value }: Props) => {
  const child = useSelector(selectCurrentChild);
  const [vaccineDate, setVaccineDate] = useState("");
  return (
    <div
      className={`${
        value ? "bg-green-400" : "bg-gray-500"
      } rounded-md px-10 py-5`}
    >
      <p className="text-xl uppercase mb-1 text-black font-bold">{title}: </p>
      <input
        type="text"
        value={value ? value : vaccineDate}
        placeholder="Fill in the data: DD/MM/YY"
        readOnly={value ? true : false}
        onChange={(e) => setVaccineDate(e.target.value)}
        className="text-2xl capitalize focus:outline-none placeholder- w-full px-5 py-2 rounded-lg bg-primary2"
      />
      <p className="text-amber-500 mt-3 font-bold text-base">
        {!value && `dead line : "${vaccineScheduler()}"`}
      </p>
    </div>
  );
};

export default Vaccine;
