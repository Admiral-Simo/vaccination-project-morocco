import { AiOutlineSearch } from "react-icons/ai";


const Search = () => {
  return (
    <div className="bg-primary2 rounded-xl w-fit flex flex-row text-white space-x-2 px-5 items-center">
        <input type="text" className="bg-primary2 p-2 focus:outline-none" placeholder="Search Child..." />
        <AiOutlineSearch size={28} color="white" />
      </div>
  )
}

export default Search