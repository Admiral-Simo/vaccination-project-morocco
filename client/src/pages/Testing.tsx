import React from "react";
import { useGetChildrenQuery } from "../redux/api/apiSlice";

const Testing = () => {
 
  const { data } = useGetChildrenQuery(3);
  console.log(data);
  return <div className="text-5xl text-white">{data ? 'found it' : 'not found'}</div>;
};

export default Testing;
