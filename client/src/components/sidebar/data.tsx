import { MdSpaceDashboard, MdChildCare } from "react-icons/md";
import {BsGenderFemale} from 'react-icons/bs'

interface DataInterface {
  icon: React.ReactNode;
  path: string;
  title: string;
}

export const data: DataInterface[] = [
  {
    icon: <MdSpaceDashboard />,
    title: "Dashboard",
    path: "/",
  },
  {
    icon: <MdChildCare />,
    title: "Children",
    path: "/children",
  },
  {
    icon: <BsGenderFemale />,
    title: "Sex",
    path: "/sex",
  },
];
