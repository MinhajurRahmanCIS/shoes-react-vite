import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Shoe from "../pages/Shoe";
import ErrorPage from "../pages/ErrorPages";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Registration from "../pages/Registration";
import PrivateRoute from "./private/PrivateRoute";
import Shoes from "../pages/Shoes";
import AllProducts from "../pages/AllProducts";
import AddProducts from "../pages/AddProducts";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("http://localhost:3000/shoes")
            },
            {
                path: "/shoes",
                element: <Shoes />,
                loader: () => fetch("http://localhost:3000/shoes")
            },
            {
                path: "/shoe/:id",
                element: <PrivateRoute><Shoe/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/shoes/${params.id}`)
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/registration",
                element: <Registration />
            },
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/dashboard",
                element: <PrivateRoute><Dashboard /></PrivateRoute>,
            },
            {
                path: "/dashboard/all-product",
                element: <PrivateRoute><AllProducts /></PrivateRoute>,
            },
            {
                path: "/dashboard/add-product",
                element: <PrivateRoute><AddProducts /></PrivateRoute>,
            },
        ]
    }
]);