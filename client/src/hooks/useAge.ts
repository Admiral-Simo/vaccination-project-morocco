import { useRef } from "react";
import { calculateAge } from "../utils/calculateAge";

const useAge = (birthday: any) => {
  const age = useRef<any>({});
  age.current = calculateAge(birthday);
  return age;
};

export default useAge;
