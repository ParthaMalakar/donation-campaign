import { NavLink } from "react-router-dom";
import logo from '../../../public/assets/Logo.png'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="navbar bg-base-100">
                <div className="flex-1 mt-8">
                    <img className="h-[70px]" src={logo} alt="" />
                </div>
                <div className="flex-none mt-8">
                    <ul className="menu menu-horizontal px-1 ">
                        <NavLink className="mr-10 text-lg font-bold" to="/">Home</NavLink>
                        <NavLink className="mr-10 text-lg font-bold" to="/donation">Donation</NavLink>
                        <NavLink className="mr-10 text-lg font-bold" to="/statistics">Statistics</NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;