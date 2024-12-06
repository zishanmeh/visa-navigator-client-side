import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  return (
    <div className="">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-7xl font-bold text-center">404 Error</h1>
        <p className="text-center text-sm mt-4 text-gray-600">
          Try again later
        </p>
        <Link to="/" className="btn btn-neutral mt-4">
          Go to home
        </Link>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ErrorPage;
