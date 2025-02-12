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
        <img src="https://www.canva.com/design/DAGe3MCijkM/E78vK-ZV_TrxP7PH0263UA/edit?utm_content=DAGe3MCijkM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" />
    </div>
    )
}
const Navbar = () =>{
    return (
        <ul className="nav">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
    )
}
const Header =() => {
    return (
    <div className="header">
        <Logo></Logo>
        <Navbar></Navbar>
    </div>
    )
}
const Search =() => {
    return (
    <div className="searchbar">
       <input type="text" />
    </div>
    )
}
const RestoCard = () =>{
    return (
        <div className="card">
            <img className="logo" src="https://www.zomato.com/pune/faasos-wraps-rolls-shawarma-shaniwar-peth/order"></img>
            <h3>Shree Ata Chakki</h3>
            <h4>Masale, Ata, Pickles</h4>
            <h5>4.5</h5>
        </div>
    )
}
const ResContainer = () =>{
    return (
    <div className="ResContainer">
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
