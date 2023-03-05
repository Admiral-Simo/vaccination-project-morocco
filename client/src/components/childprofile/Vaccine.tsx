import  { useState } from "react";

import Schedule from "./Schedule";

interface Props {
  title: string;
  value: string;
}

const Vaccine = ({ title, value }: Props) => {
  
  
  

  const [vaccineDate, setVaccineDate] = useState("");
  return (
    <div
      className={`${
        value ? "bg-green-500" : "bg-red-500"
      } rounded-md px-10 py-5`}
    >
      <p className="text-xl uppercase mb-1 text-white font-bold">{title}: </p>
      <input
        type="text"
        value={value ? value : vaccineDate}
        placeholder="Fill in the data: DD/MM/YY"
        readOnly={value ? true : false}
        onChange={(e) => setVaccineDate(e.target.value)}
        className="text-2xl capitalize focus:outline-none placeholder- w-full px-5 py-2 rounded-lg bg-primary2"
      />

      {!value && (
        <Schedule title={title} />
      )}
    </div>
  );
};

export default Vaccine;
