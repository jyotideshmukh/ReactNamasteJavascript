import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 *   - Logo
 *   - Navbar
 * Body-Container
 *   - Search
 *   - Restorent Card Container
 *       - Resto card
 * Footer
 *    - Copyright
 *    - Contact Us
 *    - Social Media links
 */
const Logo =() => {
    return (
    <div className="logo-container">
        <img className="logo-img" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"/>
    </div>
    )
}
const Navbar = () =>{
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
const Header =() => {
    return (
    <div className="header">
        <Logo></Logo>
        <Search />
        <Navbar></Navbar>
    </div>
    )
}
const Search =() => {
    return (
    <div className="searchbar">
       <input className="search" type="text" />
    </div>
    )
}
const RestoCard = () =>{
    return (
        <div className="card">
            <div className="card-img-container">
            <img className="logo-img" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"/>
            </div>
            <h3>Shree Ata Chakki</h3>
            <h4>Masale, Ata, Pickles</h4>
            <h5>4.5</h5>
        </div>
    )
}
const ResContainer = () =>{
    return (
    <div className="card-container">
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
        <RestoCard />
    </div>
    )
}
const AppContainer =() => {
    return (
    <div className="app-container">
        <search></search>
        <ResContainer></ResContainer>
    </div>
    )
}
const AppLayout = () => {
  return  ( 
    <div className="appcontainer">
    <Header />
    <AppContainer />
    </div>
   )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)
