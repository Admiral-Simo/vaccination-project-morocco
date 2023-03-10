import { FiLogOut } from "react-icons/fi";

const Profile = () => {
  return (
    <div className="text-white flex-col flex md:flex-row items-center space-x-3 relative">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShFd-RzUfTQlcWGOsMJL07eOHSVdZeCnk25Q&usqp=CAU"
        alt="avatar"
        className="rounded-full object-cover h-10 w-10"
      />
      <div className="flex flex-col justify-between">
        <h1 className="text-lg font-semibold capitalize">mohamed khalis</h1>
        <p className="text-sm text-gray-400">Admin</p>
      </div>

      <button className="opacity-100 py-4 px-4 flex flex-row items-center space-x-3 -right-10 md:right-0 -bottom-10 bg-white rounded-sm active:scale-90 text-black transition duration-300 hover:opacity-80 ">
        <FiLogOut size={18} />
        <p className="uppercase font-semibold">log out</p>
      </button>
    </div>
  );
};

export default Profile;
