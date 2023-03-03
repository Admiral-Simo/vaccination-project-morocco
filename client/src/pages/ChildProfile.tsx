import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentChild } from "../redux/features/childSlice";
import { useEffect, useState } from "react";
import data from "../data/data.json";
import Gender from "../components/reusable/Gender";
import { ChildInterface } from "../types/child";

const ChildProfile = () => {
  const id = useSelector(selectCurrentChild);
  const [child, setChild] = useState<any>({});
  useEffect(() => {
    const item = data.filter((item) => item.id === id);
    const firstItem = item[0];
    setChild(firstItem);
  }, []);
  return (
    <div className="text-secondary">
      <div className="flex justify-center items-center">
        <div className="rounded-full ring-4 ring-amber-500">
          <Gender type={child?.sex} size={50} />
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-semibold capitalize text-white">
          General Information
        </h1>
      </div>
      <p className='text-xl uppercase text-orange-500'>fullname: </p>
      <h2 className="text-2xl capitalize">{child?.fullname}</h2>
      <p className='text-xl uppercase text-orange-500'>birthday: </p>
      <h2 className="text-2xl capitalize">{child?.birthday}</h2>
    </div>
  );
};

export default ChildProfile;
