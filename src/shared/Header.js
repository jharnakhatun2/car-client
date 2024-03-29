import React, { useContext} from "react";
import { Link } from "react-router-dom";
import logo from "../assets/cardoctor.png";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import Modal from "../pages/Appointment/Modal";

const Header = () => {
  const {user,logOut} = useContext(AuthContext);
  

  const handleSignOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error =>console.error(error));
  }

  const menuItems = (
    <>
      <li className="font-semibold list-none mx-4 hover:bg-warning hover:text-white p-3 rounded-lg">
        <Link to="/">HOME</Link>
      </li>

      <li className="font-semibold list-none mx-4 hover:bg-warning hover:text-white p-3 rounded-lg">
        <Link to="/service">SERVICES</Link>
      </li>


      {/* if user logedin Order page show */}
     {
      user?.email ? 
      <>
      <li className="font-semibold list-none mx-4 hover:bg-warning hover:text-white p-3 rounded-lg">
        <Link to="/orders">ORDERS</Link>
      </li> </>
      :
      <li className="font-semibold list-none mx-4 hover:bg-warning hover:text-white p-3 rounded-lg">
        <Link to="/login">LOGIN</Link>
      </li>
      
     }
     

     <li className="font-semibold list-none mx-4 hover:bg-warning hover:text-white p-3 rounded-lg">
        <Link onClick={handleSignOut} to="/login">LOGOUT</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">{menuItems}</div>
        <div className="navbar-end">
          {/* The button to open modal */}
        <label  htmlFor="bookingModal" className="btn btn-outline btn-warning">Book Appointment</label>
        </div>
      </div>
      <Modal></Modal>
    </div>
  );
};

export default Header;
