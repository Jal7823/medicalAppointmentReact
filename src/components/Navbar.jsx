import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [toggleMenu, settoggelMenu] = useState(false);

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

  return (
    <>
      <div className="hidden md:block dark:bg-gray-800 text-white">
        <div className="flex justify-between align-middle justify-items-center align-middle">
          <div className="p-4 bg-slate-50 rounded-full m-2">
          <img className="w-[60px]" src="logo.png" alt="" />
          </div>
          <ul className="flex justify-center mr-2 justify-items-center items-center">
            <li className="ml-2">
              <NavLink to="/">🏠 Inicio</NavLink>
            </li>
            <li className="ml-2">
              <NavLink to="/hospital">🏥 hospital</NavLink>
            </li>
            <li className="ml-2">
              <NavLink to="/specialty">🔨 specialty</NavLink>
            </li>
            <li className="ml-2">
              <NavLink to="/login">👨 login</NavLink>
            </li>
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
          <li className="ml-2 w-100 mt-2 text-end">
            <NavLink to="/">🏠 Inicio</NavLink>
          </li>
          <li className="ml-2 w-100 m-2 text-end ">
            <NavLink to="/hospital">🏥 hospital</NavLink>
          </li>
          <li className="ml-2 w-100 m-2 text-end ">
            <NavLink to="/specialty">🔨 specialty</NavLink>
          </li>
          <li className="ml-2 w-100 m-2 text-end ">
            <NavLink to="/login">👨 login</NavLink>
          </li>
        </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
