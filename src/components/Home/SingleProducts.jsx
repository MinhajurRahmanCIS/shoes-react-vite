import toast from "react-hot-toast";
import { CiMenuKebab } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const SingleProducts = ({ shoe }) => {
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const { id, title, brand, price, description, image_url } = shoe;

    const handelDelete = async () => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this product!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await fetch(`http://localhost:3000/shoes/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data) {
                            toast.success("Product Removed");
                        }
                        else {
                            toast.error("Something went wrong!!");
                        }
                    })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your Product has been deleted.",
                    icon: "success"
                });
            }
        });
    };
    return (
        <div className="card shadow-xl hover:border" >
            <figure><img className="h-[300px]" src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-justify">{description}</p>
                <p><strong>Brand : </strong>{brand}</p>
                <p><strong>Price : </strong>{price}</p>

                <div className="card-actions justify-end items-center">
                    <Link to={`/shoe/${id}`} className="btn btn-neutral">Details</Link >

                    <div className="dropdown dropdown-bottom dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1"><CiMenuKebab /></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box border items-center">
                            <li><Link><FaRegEdit />Update</Link></li>
                            <li><button onClick={() => handelDelete(id)}><RiDeleteBin5Line />Remove</button></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleProducts;