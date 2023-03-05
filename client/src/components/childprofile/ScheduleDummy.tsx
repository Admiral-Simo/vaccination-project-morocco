import { calculateAge } from "../../utils/calculateAge";
import {
  dateToObject,
  getAbsoluteDateDifference,
  millisecondsToDate,
} from "../../utils/time";

interface DummyInterface {
  value: string;
}

const ScheduleDummy = ({ value }: DummyInterface) => {
  const calculateTimeLeft = () => {
    const difference = getAbsoluteDateDifference(
      new Date().getTime(),
      dateToObject(value).getTime()
    );
    // todo difference
    return Math.round(difference / 86400000 / 30.5);
  };

  calculateTimeLeft();

  return (
    <div className="flex flex-row justify-between items-center">
      <p className="mt-3 font-semibold text-base py-1 px-2 bg-black text-green-200 w-fit rounded-lg">
        dead line :<span className="text-pink-500">"{value}"</span>
      </p>
      <p className="mt-3 font-semibold text-base py-1 px-2 bg-black ml-2 text-green-200 w-fit rounded-lg">
        time left :
        <span className="text-pink-500">"{calculateTimeLeft()} month"</span>
      </p>
    </div>
  );
};

export default ScheduleDummy;
