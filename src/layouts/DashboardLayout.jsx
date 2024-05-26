import { Link, Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}

                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div>
                {/* Page content here */}
                <section className="p-10 mt-5">
                    <Outlet />
                    <Toaster/>
                </section>
            </div>
            <div className="drawer-side lg:drawer-open">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 gap-0.5">
                    {/* Sidebar content here */}
                    <li><Link  to="/dashboard" >Dashboard</Link></li>
                    <li><Link  to="/dashboard/all-product" >All Product</Link></li>
                    <li><Link  to="/dashboard/add-product" >Add Product</Link></li>
                    <li><Link  to="/" >Home</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;