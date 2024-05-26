import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/Login-Registration/GoogleLogin";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import login from "../assets/login.png"
const Login = () => {
    const { signInUser, user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const form = location?.state?.form?.pathname || "/";

    const handelSubmit = async event => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;

        await signInUser(email, password)
    };

    useEffect(() => {
        if (user) {
            navigate(form, { replace: true });
        }
    }, [user, form, navigate]);
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <img src={login} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelSubmit} className="card-body">
                        <h1 className="text-3xl font-bold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered"
                                name="email"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered"
                                name="password"
                                required
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <GoogleLogin />
                        <p className="text-center">
                            Already Have Account! <Link className="link link-hover" to="/registration">Click Here</Link>
                        </p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;