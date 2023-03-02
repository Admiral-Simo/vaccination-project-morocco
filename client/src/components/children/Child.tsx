import React from "react";
import { ChildInterface } from "../../types/child";
import { useNavigate } from "react-router-dom";
import Gender from "../reusable/Gender";

const Child = ({ SMI, fullname, adresse, sex }: ChildInterface) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/child_profile");
  };
  return (
    <tr
      onClick={handleClick}
      className="cursor-pointer transition duration-500 hover:opacity-70 border-y-8 border-transparent"
    >
      <td>
        <div className="rounded-lg py-0.5 px-1 bg-white font-semibold text-black w-fit">
          {SMI}
        </div>
      </td>
      <td
        
      >
        <Gender type={sex} size={18} />
      </td>
      <td className="text-base md:text-2xl font-bold">{fullname}</td>
      <td className="text-white font-thin">{adresse}</td>
      {/* <p>{SMI}</p>
      <p>{fullname}</p>
      <p>{adresse}</p>
      <p>{sex}</p>
      <p>{birthday}</p>
      <p>{age}</p>
      <p>{BCG_HB_VPO_vitD}</p>
      <p>{size}</p>
      <p>{penta1}</p>
      <p>{size__1}</p>
      <p>{penta2}</p>
      <p>{size__2}</p>
      <p>{penta3}</p>
      <p>{size__3}</p>
      <p>{vitD_vitA}</p>
      <p>{size__4}</p>
      <p>{RR}</p>
      <p>{size__5}</p>
      <p>{pneumo3}</p>
      <p>{size__6}</p>
      <p>{DTC_RR_VPO_vitA}</p>
      <p>{size__7}</p>
      <p>{DTC_VPO}</p>
      <p>{size__8}</p> */}
    </tr>
  );
};

export default Child;
