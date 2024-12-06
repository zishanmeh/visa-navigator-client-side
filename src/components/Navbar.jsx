import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <>
      <li className="mr-2">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="mr-2">
        <NavLink to={"/all-visa"}>All visas</NavLink>
      </li>
      <li className="mr-2">
        <NavLink to={"/add-visa"}>Add visa</NavLink>
      </li>
      <li className="mr-2">
        <NavLink to={`/my-visa/${user?.email}`}>My added visas</NavLink>
      </li>
      <li className="mr-2">
        <NavLink to={`visa/application/${user?.email}`}>
          My Visa applications
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100  rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">VisaVoyage</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-2 items-center">
            <img
              className="w-16 h-16 rounded-full"
              id="clickable"
              src={user.photoURL}
              alt={user.displayName}
            />
            <Tooltip anchorSelect="#clickable" clickable>
              <p className="mb-2">{user.displayName}</p>
              <button onClick={logOut} className="btn btn-neutral">
                Logout
              </button>
            </Tooltip>
          </div>
        ) : (
          <div>
            <Link to="/login" className="btn btn-neutral mr-2">
              Login
            </Link>
            <Link to="/register" className="btn btn-neutral btn-outline">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
