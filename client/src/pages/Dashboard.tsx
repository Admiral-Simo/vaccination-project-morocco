import ChildrenCount from "../components/dashboard/ChildrenCount";
import data from "../data/data.json";

const Dashboard = () => {
  return (
    <>
      <div className="mb-4">
        <h1 className="text-yellow-50 text-3xl uppercase font-semibold mb-1">
          Dashboard
        </h1>
        <p className="text-secondary">Welcome to your dashboard user.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <ChildrenCount total={data.length} />
        <ChildrenCount total={data.length} />
        <ChildrenCount total={data.length} />
      </div>
    </>
  );
};

export default Dashboard;
