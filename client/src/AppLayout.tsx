import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function AppLayout() {
  return (
    <div className="min-h-screen gradient font-poppins flex flex-row">
      <Sidebar />
      <div className="w-full p-2 bg-primary1">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
