import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/CardContainer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error"
import Restaurant from "./components/Restaurant";
//import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"))


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
        element: <AppLayout />,
        errorElement: <Error />,
        children:
            [{
                path: "/",
                element: <Body />

            },
            {
                path: "/contact",
                element: <Contact />

            },
            {
                path: "/about",
                element: <About />

            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading</h1>}>
                    <Grocery />
                </Suspense>

            },
            {
                path: "/reastaurant/:resId",
                element: <Restaurant />

            }
            ]

    }]

)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
