import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorComp from "./components/ErrorComp";
import RestauMenu from "./components/RestauMenu";
import "../index.css"
// const styleCard = {   //     this is an javascript object
//     backgroundColor: "#f0f0f0",
// };

const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
};
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurants/:resId",
                element: <RestauMenu/>
            }
        ],
        errorElement: <ErrorComp/>
    },
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);