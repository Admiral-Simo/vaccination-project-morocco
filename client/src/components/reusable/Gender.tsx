import { BsGenderFemale, BsGenderMale } from "react-icons/bs";

interface GenderProps {
  type: string;
  size: number;
}

const Gender = ({ type, size }: GenderProps) => {
  return (
    <div
      className={`p-4 w-fit flex justify-center items-center ${
        type === "f" ? "bg-pink-500" : "bg-sky-500"
      } rounded-full`}
    >
      {type === "f" ? (
        <BsGenderFemale size={size} color="#fff" />
      ) : (
        <BsGenderMale size={size} color="#fff" />
      )}
    </div>
  );
};

export default Gender;
