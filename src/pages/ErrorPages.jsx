import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className=" text-7xl font-extrabold mb-8">Error {status || 404}</h1>
      <p className="lg:text-3xl">{error?.message}</p>
      <button className="btn bg-red-500 text-white mt-8">
        <Link to="/">HomePage</Link>
      </button>
    </div>
  );
};

export default ErrorPage;