import { useEffect } from "react";
import { useSelector } from "react-redux";
import useSchedule from "../../hooks/useSchedule";
import { selectCurrentChild } from "../../redux/features/childSlice";
import ScheduleDummy from "./ScheduleDummy";

interface ScheduleProps {
  title: string;
}

const Schedule = ({ title }: ScheduleProps) => {
  const child = useSelector(selectCurrentChild);

  const { bcg, penta1, penta2, penta3, vitAD, rr, pneumo3, dtc1, dtc2 } =
    useSchedule(child).current;

  useEffect(() => {
    console.log(bcg, penta1, penta2, penta3, vitAD, rr, pneumo3, dtc1, dtc2);
  }, []);

  switch (title.toUpperCase()) {
    case "BCG_HB_VPO_VITD":
      return <ScheduleDummy value={bcg} />;
    case "PENTA1":
      return <ScheduleDummy value={penta1} />;
    case "PENTA2":
      return <ScheduleDummy value={penta2} />;
    case "PENTA3":
      return <ScheduleDummy value={penta3} />;
    case "VITD_VITA":
      return <ScheduleDummy value={vitAD} />;
    case "RR":
      return <ScheduleDummy value={rr} />;
    case "PNEUMO3":
      return <ScheduleDummy value={pneumo3} />;

    case "DTC_RR_VPO_VITA":
      return <ScheduleDummy value={dtc1} />;

    case "DTC_VPO":
      return <ScheduleDummy value={dtc2} />;

    default:
      return (
        <p className="mt-3 font-semibold text-base py-1 px-2 bg-black w-fit rounded-xl">
          No Vaccine Detected
        </p>
      );
  }
};

export default Schedule;
