import { useDispatch, useSelector } from "react-redux";
import { selectQuery, setQuery } from "../../redux/features/searchSlice";

import { FaWindowClose } from "react-icons/fa";
import { useEffect } from "react";

const Search = () => {
  const query = useSelector(selectQuery);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setQuery(""));
  }, []);
  return (
    <div className="bg-primary2 w-fit relative flex flex-row text-white space-x-2 px-5 items-center">
      <input
        onChange={(e) => dispatch(setQuery(e.target.value))}
        value={query}
        type="text"
        className="bg-primary2 p-2 focus:outline-none"
        placeholder="Search Child..."
      />
      <button
        onClick={() => dispatch(setQuery(""))}
        className="bg-primary2 absolute right-0 top-0 bottom-0 p-2 focus:outline-none text-sky-500"
      >
        {query && <FaWindowClose />}
      </button>
    </div>
  );
};

export default Search;
