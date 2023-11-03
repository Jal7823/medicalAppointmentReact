/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();
  const [toggleMenu, settoggelMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleBarMenu = () => {
    const menuMobile = document.getElementById("menuBar");

    if (toggleMenu) {
      menuMobile.classList.remove("hidden");
      menuMobile.classList.add("block");
      settoggelMenu(false);
    } else {
      menuMobile.classList.remove("block");
      menuMobile.classList.add("hidden");
      menuMobile.classList.add("hidden");
      settoggelMenu(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    checkLoginStatus();
  }, [handleLogout]);

  return (
    <div className="animate-fade-down animate-once sticky top-0 z-10">
      <div className="hidden md:block dark:bg-gray-800 text-white">
        <div className="flex justify-between align-middle justify-items-center align-middle">
          <div className="p-2 m-1 bg-slate-50 rounded-full ">
            <NavLink to="/">
              <img className="w-[60px] animate-pulse" src="logo.png" alt="" />
            </NavLink>
          </div>
          <ul className="flex justify-center items-center ml-auto">
            <li className="ml-2 ">
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li className="ml-2">
              <NavLink to="/hospital">Hospital</NavLink>
            </li>
            <li className="ml-2 w-100 text-end">
              <NavLink to="/appointment">Citas</NavLink>
            </li>
            {isLoggedIn ? (
              <div className='flex items-center'>
                <li className="ml-2 w-100 text-end">
                  <NavLink onClick={handleLogout} to="/logout">
                    Logout
                  </NavLink>
                </li>
                <li className="ml-2 w-100 text-end mr-2">
                  <NavLink to="/">
                    <div className="bg-slate-300 rounded-full">
                      <img
                        className="w-[40px] rounded-full p-[0.7px]"
                        src={user.image}
                        alt={user.name}
                      />
                    </div>
                  </NavLink>
                </li>
              </div>
            ) : (
              <li className="ml-2 w-100 text-end">
                <NavLink to="/login">Login</NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* menu mobile */}
      <div className="md:hidden block dark:bg-gray-800">
        <div className="flex justify-between">
          <div className="p-4 bg-slate-50 rounded-full m-2 ">
            <img className="w-[60px] animate-pulse " src="logo.png " alt="" />
          </div>
          <button onClick={handleBarMenu} className="">
            <i className="fa fa-bars m-4 text-white"></i>
          </button>
        </div>

        <div className="flex flex-wrap flex-col justify-end transition duration-150 ease-in-out text-white m-4">
          <ul className="flex flex-col justify-end hidden" id="menuBar">
            <li className="ml-2 w-100 mt-2 text-end mt-4">
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li className="ml-2 w-100 m-2 text-end  mt-4">
              <NavLink to="/hospital">Hospital</NavLink>
            </li>
            <li className="ml-2  w-100 text-end mt-4">
              <NavLink to="/appointment">Citas</NavLink>
            </li>
            {isLoggedIn ? (
              <div className='flex justify-end '>
              <li className="ml-2 w-100 text-end mt-4 mb-4">
                <NavLink onClick={handleLogout} to="/logout">
                  Logout 🙎
                </NavLink>
              </li>
              
            </div>
            ) : (
              <li className="ml-2 w-100 text-end mt-4">
                <NavLink to="/login">Login</NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
