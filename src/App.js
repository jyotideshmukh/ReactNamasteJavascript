import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/CardContainer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error"



const AppLayout = () => {
    return (
        <div className="content">
            <Header />
            <Outlet />
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error />,
        children:
            [{
                path: "/",
                element: <Body/>
        
            },
                {
                path: "/contact",
                element: <Contact/>
        
            },
            {
                path: "/about",
                element: <About/>
        
            }]
        
        }]

)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
