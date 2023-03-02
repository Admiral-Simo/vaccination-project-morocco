import { useDispatch, useSelector } from "react-redux";
import { selectQuery, setQuery } from "../../redux/features/searchSlice";

import { FaWindowClose } from "react-icons/fa";

const Search = () => {
  const query = useSelector(selectQuery);
  const dispatch = useDispatch();
  return (
    <div className="bg-primary2 rounded-xl w-fit flex flex-row text-white space-x-2 px-5 items-center">
      <input
        onChange={(e) => dispatch(setQuery(e.target.value))}
        value={query}
        type="text"
        className="bg-primary2 p-2 focus:outline-none"
        placeholder="Search Child..."
      />
      <button
        onClick={() => dispatch(setQuery(""))}
        className="bg-primary2 p-2 focus:outline-none text-sky-500"
      >
        <FaWindowClose />
      </button>
    </div>
  );
};

export default Search;
