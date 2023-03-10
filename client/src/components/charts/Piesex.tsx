// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

import { useGetSexStatQuery } from "../../redux/api/apiSlice";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const Piesex = (): any => {
  const { data } = useGetSexStatQuery(3);
  return (
    <div className="text-white bg-primary2 rounded-lg m-5 p-5 flex flex-col items-center justify-center">
      <div className="flex flex-row gap-4 items-end h-[600px]">
        <div
          className="bg-[#018dff] h-[50%] w-20 flex items-center justify-center font-semibold text-xl"
          style={{
            height: `${
              // @ts-ignore
              (data?.male_cnt / data?.total_cnt) * 100
            }%`,
          }}
          // @ts-ignore
        >
          {Math.round((data?.male_cnt / data?.total_cnt) * 100)}%
        </div>
        <div
          className="bg-[#ff0077] w-20 flex items-center justify-center font-semibold text-xl"
          style={{
            height: `${
              // @ts-ignore
              (data?.female_cnt / data?.total_cnt) * 100
            }%`,
          }}
          // @ts-ignore
        >
          {Math.round((data?.female_cnt / data?.total_cnt) * 100)}%
        </div>
        <div
          className="bg-purple-800 w-20 flex items-center justify-center font-semibold text-xl"
          style={{
            height: `${
              // @ts-ignore
              100
            }%`,
          }}
          // @ts-ignore
        >
          100%
        </div>
      </div>
      <div className="flex flex-row items-center gap-5 mt-6">
        <div className="flex flex-row items-center gap-3">
          <div className="w-5 h-5 bg-[#018dff] rounded-full"></div>male:{" "}
          {data?.male_cnt}
        </div>
        <div className="flex flex-row items-center gap-3">
          <div className="w-5 h-5 bg-[#ff0077] rounded-full"></div>female:{" "}
          {data?.female_cnt}
        </div>
        <div className="flex flex-row items-center gap-3">
          <div className="w-5 h-5 bg-purple-800 rounded-full"></div>total:{" "}
          {data?.total_cnt}
        </div>
      </div>
    </div>
  );
};

export default Piesex;
