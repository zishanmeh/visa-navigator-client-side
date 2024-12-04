import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import GoogleSign from "../components/GoogleSign";
import { toast } from "react-toastify";

const Login = () => {
  const { signInUser, setUser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setErrorMessage(null);
        toast.success("Login successfulll");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center text-gray-700">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="font-bold text-center text-2xl">Login Your Account</h2>
        {errorMessage && (
          <p className="text-red-500 text-center mt-3">{errorMessage}</p>
        )}
        <form className="card-body" onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
        </form>
        <div className="text-center">
          <p>Or</p>
          <GoogleSign></GoogleSign>
        </div>
        <p>
          Don't have an Account?{" "}
          <Link to="/register" className="hover:underline text-red-500">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
