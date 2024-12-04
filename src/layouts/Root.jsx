import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div className="font-poppins bg-[#1c1c31]">
      <Navbar></Navbar>
      <div className="min-h-screen text-white max-w-7xl w-11/12 mx-auto py-20">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
