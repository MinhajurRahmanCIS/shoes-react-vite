import { useLoaderData } from "react-router-dom";

const shoe = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const shoeInfo = useLoaderData();
    // eslint-disable-next-line no-unused-vars
    const { id, title, brand, price, description, image_url } = shoeInfo;
    return (
        <div className="card lg:card-side border shadow-xl my-10 p-5 hover:bg-slate-100">
            <figure><img className="h-[400px]" src={image_url} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="text-4xl font-bold">{title}</h2>
                <div className="flex-grow-0 text-md">
                    <p>{description}</p>
                    <p ><strong>Brand : </strong>{brand}</p>
                    <p ><strong>Price : $</strong>{price}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-neutral absolute bottom-2 md:bottom-8 lg:bottom-10">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default shoe;