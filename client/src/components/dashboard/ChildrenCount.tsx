import { FaChild } from "react-icons/fa";

interface ChildrenProps {
  title: string;
  total: string | number;
}

const ChildrenCount = ({ title, total }: ChildrenProps) => {
  return (
    <div className="p-6 rounded-lg bg-primary2 text-secondary">
      <div className="flex flex-row justify-between mb-5">
        <h3 className="capitalize">{title}</h3>
        <FaChild size={28} />
      </div>
      <h1 className="text-3xl font-bold">{total}</h1>
    </div>
  );
};

export default ChildrenCount;
