import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
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
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
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