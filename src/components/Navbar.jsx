import {NavLink} from 'react-router-dom'


function Navbar() {
  return (
    <>
    <div className="">
        <div className="flex justify-between align-middle">
        <img className="w-[60px]" src="logo.png" alt="" />
        <ul className="flex justify-center mr-2 align-middle">
            <li className="ml-2"><NavLink to="/">🏠  Inicio</NavLink></li>
            <li className="ml-2"><NavLink to="/hospital">🏥  hospital</NavLink></li>
            <li className="ml-2"><NavLink to="/speciaties">🔨  speciaties</NavLink></li>
            <li className="ml-2"><NavLink to="/login">👨  login</NavLink></li>
        </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar