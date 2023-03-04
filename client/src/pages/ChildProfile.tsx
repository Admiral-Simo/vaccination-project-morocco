import { useSelector } from "react-redux";
import { selectCurrentChild } from "../redux/features/childSlice";
import Gender from "../components/reusable/Gender";
// import { ChildInterface } from "../types/child";
import useAge from "../components/hooks/useAge";
import Vaccine from "../components/childprofile/Vaccine";

const whenToVaccine = [
  {
    title: "BCG_HB_VPO_vitD",
    // months
    after: 3,
  },
];

const ChildProfile = () => {
  const child = useSelector(selectCurrentChild);
  const age = useAge(child?.birthday);

  return (
    <div className="text-secondary">
      <div className="flex justify-center items-center mb-10">
        <div className="rounded-full ring-4 ring-amber-500">
          <Gender type={child?.sex} size={50} />
        </div>
      </div>
      <div>
        <h1 className="text-5xl font-semibold capitalize p-5 text-white">
          General Information
        </h1>
      </div>
      <p className="text-xl uppercase text-orange-500">fullname: </p>
      <h2 className="text-2xl capitalize mb-3">{child?.fullname}</h2>
      <p className="text-xl uppercase text-orange-500">birthday: </p>
      <h2 className="text-2xl capitalize mb-3">{child?.birthday}</h2>
      <p className="text-xl uppercase text-orange-500">birthday: </p>
      <h2 className="text-2xl capitalize mb-3">
        {age &&
          `${age.current?.year} years,${age.current?.month} months,${age.current?.day} days`}
      </h2>
      <p className="text-xl uppercase text-orange-500">vaccines: </p>
      {/* vaccines */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
        <Vaccine value={child?.BCG_HB_VPO_vitD} title="BCG_HB_VPO_vitD" />
        <Vaccine value={child?.penta1} title="penta1" />
        <Vaccine value={child?.penta2} title="penta2" />
        <Vaccine value={child?.penta3} title="penta3" />
        <Vaccine value={child?.vitD_vitA} title="vitD_vitA" />
        <Vaccine value={child?.RR} title="RR" />
        <Vaccine value={child?.pneumo3} title="pneumo3" />
        <Vaccine value={child?.DTC_RR_VPO_vitA} title="DTC_RR_VPO_vitA" />
        <Vaccine value={child?.DTC_VPO} title="DTC_VPO" />
      </div>
      <div className="relative flex justify-end mb-3">
        <button className="bg-green-400 text-gray-800 py-4 px-7 text-3xl font-bold rounded-lg active:scale-90 transition duration-300 hover:opacity-80">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ChildProfile;
