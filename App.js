import React from "react";
import ReactDOM from "react-dom/client"
import logo from "./image/logo.svg";
const Header = () => {
    return(
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo-img"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    );
};
const RestaurantCard = () => {
    return(
        <div className="res-card" style={{backgroundColor:'#f0f0f0' }} >
            <h3>EatFit</h3>
        </div>
    );
};
const Body = () =>{
    return(
       <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            <RestaurantCard/>
        </div>
       </div> 
    )
}
const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);