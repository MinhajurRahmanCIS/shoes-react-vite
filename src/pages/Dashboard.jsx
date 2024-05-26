import useAuth from "../hooks/useAuth";

const Dashboard = () => {
    const { user } = useAuth();
    return (
        <div className="">
            <div className="avatar online">
                <div className="w-40 rounded-full">
                    <img src={user?.photoURL} />
                </div>
            </div>
            <h1 className="text-xl">{user?.displayName}</h1>

            <form>
                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Email</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full" 
                            defaultValue={user?.email}
                            disabled
                            />
                    </label>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Nationality</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter Nationality"
                            className="input input-bordered w-full " />
                    </label>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Phone</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter Phone Number"
                            className="input input-bordered w-full " />
                    </label>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Address</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter Phone Address"
                            className="input input-bordered w-full " />
                    </label>
                </div>
                <button className="btn btn-neutral w-full my-5">Update Profile</button>
            </form>

        </div>
    );
};

export default Dashboard;