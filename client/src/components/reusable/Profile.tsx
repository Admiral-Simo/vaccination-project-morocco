import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

const Profile = () => {
  const [showLogOut, setShowLogOut] = useState(false);
  return (
    <div className="text-white flex flex-row items-center space-x-3 relative">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShFd-RzUfTQlcWGOsMJL07eOHSVdZeCnk25Q&usqp=CAU"
        alt="avatar"
        className="rounded-full object-cover h-10 w-10"
      />
      <div className="flex flex-col justify-between">
        <h1 className="text-lg font-semibold capitalize">toufik khalis</h1>
        <p className="text-sm text-gray-400">Admin</p>
      </div>
      <button
        onClick={() => setShowLogOut((prev) => !prev)}
        className="text-white hover:bg-white hover:text-black p-2 rounded-full transition duration-300"
      >
        <AiFillCaretDown size={18} />
      </button>

      <button
        className={`${
          showLogOut
            ? "opacity-100 py-1.5 px-4 md:absolute md:flex flex-row items-center space-x-3 -right-10 md:right-0 -bottom-10 bg-white rounded-lg text-black transition duration-300 hover:opacity-80 "
            : "opacity-0 hidden"
        }`}
      >
        <FiLogOut size={18} />
        <p className="uppercase font-semibold">log out</p>
      </button>
    </div>
  );
};

export default Profile;
