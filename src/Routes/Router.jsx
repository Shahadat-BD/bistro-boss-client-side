
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
import AdminRoutes from "./AdminRoutes";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import Payment from "../Pages/Dashboard/Payment/Payment";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement : <ErrorPage/>,
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
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement : <ErrorPage/>,
        children : [
            {
                path:'cart',
                element: <Cart></Cart>
            },
            {
                path : 'payment',
                element : <Payment></Payment>
            },
            // Only admin can go to the routes
            {
               path : 'add_item',
               element : <AdminRoutes><AddItem></AddItem></AdminRoutes>
            },
            {
              path : 'manage_item',
              element : <AdminRoutes><ManageItems></ManageItems></AdminRoutes>
            },
            {
              path:'updateItem/:id',
              element : <AdminRoutes> <UpdateItem></UpdateItem> </AdminRoutes>,
              loader : ({params}) => fetch(`http://localhost:4000/foodMenu/${params.id}`)
            },
            {
                path:'all_users',
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            }
        ]
    }
  ]);
  
export default router