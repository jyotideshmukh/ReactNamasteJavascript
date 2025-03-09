import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus"
const Logo = () => {
    return (
        <div className="logo-container h-30">
            <img className="w-50 h-25" src={LOGO_URL} />
        </div>
    )
}
const Navbar = () => {
    const [btnLogin, setBtnLogin] = useState("Login");
    return (
        <div className="flex">
            <ul className="flex p-5 m-5 h-20">
                <li className="p-2 hover:bg-gray-200">Online Status {useOnlineStatus()===true ? '🟢': '🔴'}</li>
                <li className="p-2  hover:bg-gray-200"><Link to={"/"}>Home</Link></li>
                <li className="p-2  hover:bg-gray-200"><Link to={"/about"}>About Us</Link></li>
                <li className="p-2  hover:bg-gray-200"><Link to={"/contact"}>Contact Us</Link></li>
                <li className="p-2  hover:bg-gray-200"><Link to={"/grocery"}>Grocery</Link></li>
                <li className="p-2  hover:bg-gray-200">Cart</li>
                <li className="p-2">
                    <button 
                    className="ml-2 p-2 bg-red-600 border-red-800 border-1 rounded-sm text-amber-50"
                    onClick={()=>{
                        btnLogin === "Login" ?
                        setBtnLogin("Logout"):
                        setBtnLogin("Login");

                    }}>{btnLogin}</button></li>
            </ul>
        </div>
    )
}

const Header = () => {
    return (
        <div className="flex justify-between">
            <Logo></Logo>
            <Navbar></Navbar>
        </div>
    )
}

export default Header;