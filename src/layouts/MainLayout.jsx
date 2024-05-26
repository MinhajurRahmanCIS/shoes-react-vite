import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from 'react-hot-toast';
const MainLayout = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster/>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;