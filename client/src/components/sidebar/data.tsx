import { MdSpaceDashboard, MdChildCare,  } from "react-icons/md";
import {TbVaccine} from 'react-icons/tb'
import { BsGenderFemale } from "react-icons/bs";

interface DataInterface {
  icon: React.ReactNode;
  path: string;
  title: string;
}

export const data: DataInterface[] = [
  {
    icon: <MdSpaceDashboard size={22} />,
    title: "Dashboard",
    path: "/",
  },
  {
    icon: <MdChildCare size={22} />,
    title: "Children",
    path: "/children",
  },
  {
    icon: <BsGenderFemale size={22} />,
    title: "Sex",
    path: "/sex",
  },
  {
    icon: <TbVaccine size={22} />,
    title: "Search By vaccine",
    path: "/sex",
  },
];
