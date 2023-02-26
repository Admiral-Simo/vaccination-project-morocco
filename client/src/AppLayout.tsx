import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";




function AppLayout() {
  return (
    <div className="min-h-screen gradient font-poppins flex flex-row">
      <Navbar />
      <Outlet />
      
    </div>
  );
}

export default AppLayout;
