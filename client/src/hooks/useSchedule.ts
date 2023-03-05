import { useRef } from "react";
import { vaccineScheduler } from "../utils/vaccineSchedule";

const useSchedule = (data: any) => {
  const scheduled = useRef<any>({});
  scheduled.current = vaccineScheduler(data, data?.birthday);
  return scheduled;
};

export default useSchedule;
