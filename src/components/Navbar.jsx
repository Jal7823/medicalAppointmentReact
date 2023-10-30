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
      <div className="hidden md:block">
        <div className="flex justify-between align-middle justify-items-center align-middle">
          <img className="w-[60px]" src="logo.png" alt="" />
          <ul className="flex justify-center mr-2 justify-items-center items-center">
            <li className="ml-2">
              <NavLink to="/">🏠 Inicio</NavLink>
            </li>
            <li className="ml-2">
              <NavLink to="/hospital">🏥 hospital</NavLink>
            </li>
            <li className="ml-2">
              <NavLink to="/speciaties">🔨 speciaties</NavLink>
            </li>
            <li className="ml-2">
              <NavLink to="/login">👨 login</NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* menu mobile */}
      <div className="md:hidden block">
        <div className="flex justify-between">
          <img className="w-[60px]" src="logo.png" alt="" />
          <button onClick={handleBarMenu}>
            <i className="fa fa-bars m-4"></i>
          </button>
        </div>

        <div className="flex flex-wrap justify-end">
        <ul className="flex flex-col justify-end hidden" id="menuBar">
          <li className="ml-2 w-100">
            <NavLink to="/">🏠 Inicio</NavLink>
          </li>
          <li className="ml-2 w-100">
            <NavLink to="/hospital">🏥 hospital</NavLink>
          </li>
          <li className="ml-2 w-100">
            <NavLink to="/speciaties">🔨 speciaties</NavLink>
          </li>
          <li className="ml-2 w-100">
            <NavLink to="/login">👨 login</NavLink>
          </li>
        </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
