import { useState } from "react";
import { BsCheckAll } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
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
        value ? "bg-[#fff]" : "bg-primary2"
      } rounded-md px-10 py-5 relative`}
    >
      <div
        className={`absolute right-5 -top-8 ${
          value ? "bg-green-800" : "bg-red-800"
        } w-16 h-16 rounded-full`}
      >
        <div className="flex w-full h-full justify-center items-center">
          {value ? (
            <BsCheckAll color="white" size={30} />
          ) : (
            <BiTimeFive color="white" size={30} />
          )}
        </div>
      </div>
      <p className={`text-xl uppercase mb-1 ${value ? 'text-black': 'text-white'} font-bold`}>{title}: </p>
      <input
        type="text"
        value={value ? value : vaccineDate}
        placeholder="Fill in the data: DD/MM/YY"
        readOnly={value ? true : false}
        onChange={(e) => setVaccineDate(e.target.value)}
        className="text-2xl capitalize focus:outline-none bg-[#333] placeholder- w-full px-5 py-2 rounded-lg"
      />

      {!value && <Schedule title={title} />}
    </div>
  );
};

export default Vaccine;
