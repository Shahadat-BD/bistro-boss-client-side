
import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import ContactUs from "../Pages/ContactPages/ContactUs/ContactUs";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children : [
        {
            path : "/",
            element : <Home></Home>
        },
        {
            path : "/menu",
            element : <PrivateRoute> <Menu></Menu></PrivateRoute>
        },
        {
            path : "/order/:category",
            element : <Order></Order>
        },
        {
            path : "/contact",
            element : <ContactUs></ContactUs>
        },
        {
            path : "/login",
            element : <Login></Login>
        },
        {
            path : "/register",
            element : <Register></Register>
        },
      ]      
    },
    {
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        children : [
            {
                path:'cart',
                element: <Cart></Cart>
            },
            // admin routes
            {
                path:'all_users',
                element: <AllUsers></AllUsers>
            }
        ]
    }
  ]);
  
export default router