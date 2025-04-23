import { useState,useContext } from "react";
import logo from "../../image/logo.svg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
    const [btnName, setbtnName] = useState("Login");
    const onlineStatus = useOnline();
    const contData = useContext(UserContext);
    const cartItems = useSelector((store)=>store.cart.items);
    return(
        <div className="flex justify-between bg-green-50">
            <div className="text-align-left pt-[10px]">
                <img src={logo} alt="logo-img"/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus?"✅":"🔴"};
                    </li>
                    <li className="px-4">
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to={"/about"}>About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to={"/contact"}>Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to={"/cart"}>cart ({cartItems.length})</Link></li>
                    <button className="px-4 cursor-pointer"
                     onClick={()=>{
                        setbtnName(btnName === "Login" ? "Logout" : "Login");
                     }}
                    >{btnName}</button>
                </ul>
            </div>
        </div>
    );
}
export default Header;