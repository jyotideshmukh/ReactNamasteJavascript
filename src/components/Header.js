import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus"
const Logo = () => {
    return (
        <div className="logo-container">
            <img className="logo-img" src={LOGO_URL} />
        </div>
    )
}
const Navbar = () => {
    const [btnLogin, setBtnLogin] = useState("Login");
    return (
        <div className="nav">
            <ul>
                <li>Online Status {useOnlineStatus()===true ? '🟢': '🔴'}</li>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About Us</Link></li>
                <li><Link to={"/contact"}>Contact Us</Link></li>
                <li>Cart</li>
                <li>
                    <button 
                    className="btn-login"
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
        <div className="header">
            <Logo></Logo>
            <Navbar></Navbar>
        </div>
    )
}

export default Header;