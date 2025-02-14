import { LOGO_URL } from "../utils/constants"
const Logo = () => {
    return (
        <div className="logo-container">
            <img className="logo-img" src={LOGO_URL} />
        </div>
    )
}
const Navbar = () => {
    return (
        <div className="nav">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    )
}
const Search = () => {
    return (
        <div className="searchbar">
            <input className="search" type="text" />
        </div>
    )
}
const Header = () => {
    return (
        <div className="header">
            <Logo></Logo>
            <Search />
            <Navbar></Navbar>
        </div>
    )
}

export default Header;