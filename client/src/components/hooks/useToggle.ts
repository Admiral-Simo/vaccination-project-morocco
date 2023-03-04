import { useState } from "react";

const useToggle = (initialValue: boolean) => {
  const [boolean, setBoolean] = useState(initialValue);

  const toggle = () => {
    setBoolean((prev) => !prev);
  };

  return [boolean, toggle];
};

export default useToggle;
