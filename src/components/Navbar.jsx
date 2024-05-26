import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { SiAdidas } from "react-icons/si";

const Navbar = () => {
    const { user, logout } = useAuth();
    const handelLogout = async () => {
        await logout()
    };
    const menu =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shoes">Shoes</Link></li>
            <li><Link to="/about">About</Link></li>
            {
                user?.uid &&
                <li><Link to="/dashboard">Dashboard</Link></li>
            }
        </>
        ;
    return (
        <div className="navbar bg-base-100 border-b">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-0.5">
                        {menu}
                    </ul>
                </div>
                <a className="btn btn-ghost text-5xl"><SiAdidas /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-0.5">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end gap-3">

                {
                    user?.uid ?
                        <>
                            {user?.displayName}
                            <div className="avatar">
                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <button className="btn"><Link to="/registration">Registration</Link></button>
                            <button className="btn"><Link to="/login">Login</Link></button>
                        </>
                }

                {
                    user?.uid &&
                    <button onClick={handelLogout} className="btn btn-error">Logout</button>
                }
            </div>
        </div>
    );
};

export default Navbar;