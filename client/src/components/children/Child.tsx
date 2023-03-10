import React from "react";
import { ChildInterface } from "../../types/child";
import { useNavigate } from "react-router-dom";
import Gender from "../reusable/Gender";
import { useDispatch } from "react-redux";
import { setCurrentChild } from "../../redux/features/childSlice";
import data from '../../data/data.json'

const Child = ({ SMI, fullname, adresse, sex, id }: ChildInterface) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    // todo store id to the current child redux
    const item = data.filter((item) => item.id === id);
    const firstItem = item[0];
    dispatch(setCurrentChild(firstItem));
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
      <td>
        <Gender type={sex} size={18} />
      </td>
      <td className="text-base md:text-2xl font-bold capitalize">{fullname}</td>
      <td className="text-white font-thin">{adresse}</td>
      
    </tr>
  );
};

export default Child;
