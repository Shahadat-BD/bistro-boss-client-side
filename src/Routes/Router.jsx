
import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import ContactUs from "../Pages/ContactPages/ContactUs/ContactUs";
import PrivateRoute from "./PrivateRoute";

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
  ]);
  
export default router