import ChildrenCount from "../components/dashboard/ChildrenCount";
import data from "../data/data.json";
import { useGetDashboardStatsQuery } from "../redux/api/apiSlice";
import moment from "moment";

const yearsToAge = (years: number) => {
  return `${Math.round(years * 12)} month`;
};

const Dashboard = () => {
  const { data: stats } = useGetDashboardStatsQuery(3);
  return (
    <>
      <div className="mb-4">
        <h1 className="mb-1 text-3xl font-semibold uppercase text-yellow-50">
          Dashboard
        </h1>
        <p className="text-secondary">Welcome to your dashboard user.</p>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <ChildrenCount total={`${data.length} child`} title="Total Children" />
        <ChildrenCount
          total={yearsToAge(stats?.average_age)}
          title="Average Child Age"
        />
        <ChildrenCount total={stats?.average_done} title="average vaccination made by child" />
      </div>
    </>
  );
};

export default Dashboard;
