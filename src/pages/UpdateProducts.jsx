import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingSpinner from '../components/Home/LoadingSpinner';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

const UpdateProducts = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useState({});
    const { title, brand, price, description, image_url } = products;

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        fetch(`http://localhost:3000/shoes/${id}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [id]);

    if (!products) {
        return <LoadingSpinner></LoadingSpinner>;
    }

    const handelUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const id = form.id.value;
        const title = form.title.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const description = form.description.value;
        const image_url = form.image_url.value;

        const product = {
            id,
            title,
            brand,
            price,
            description,
            image_url
        };
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this update!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Update"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await fetch(`http://localhost:3000/shoes/${id}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(product)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data) {
                            Swal.fire({
                                title: "Updated!",
                                text: "Your Product has been updated.",
                                icon: "success"
                            });
                            toast.success("Product Added Successfully");
                            navigate('/dashboard/all-product');
                        }
                        else {
                            toast.error("Something went wrong!!");
                        }
                    });
            }
        });

    };

    return (
        <div>
            <h1 className="text-center text-4xl font-bold my-5">Update Product</h1>
            <div>
                <form onSubmit={handelUpdate}>
                    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5">
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Title</span>
                            </div>
                            <input
                                type="text"
                                name="title"
                                placeholder="Enter Title"
                                className="input input-bordered w-full"
                                defaultValue={title}
                                required
                            />
                        </label>

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Brand</span>
                            </div>
                            <input
                                type="text"
                                name="brand"
                                placeholder="Enter Brand"
                                className="input input-bordered w-full"
                                defaultValue={brand}
                                required
                            />
                        </label>


                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Price</span>
                            </div>
                            <input
                                type="number"
                                name="price"
                                placeholder="Enter Price"
                                className="input input-bordered w-full "
                                defaultValue={price}
                                required
                            />
                        </label>

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Image URL</span>
                            </div>
                            <input
                                type="text"
                                name="image_url"
                                placeholder="Enter Image URL"
                                className="input input-bordered w-full "
                                defaultValue={image_url}
                                required
                            />
                        </label>

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">ID</span>
                            </div>
                            <input
                                type="text"
                                name="id"
                                placeholder="Enter Product ID"
                                className="input input-bordered w-full "
                                defaultValue={id}
                                disabled
                                required
                            />
                        </label>


                    </div>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Description</span>
                        </div>
                        <textarea
                            placeholder="Description"
                            name="description"
                            className="textarea textarea-bordered textarea-lg w-full"
                            defaultValue={description}
                            required
                        />
                    </label>

                    <input className="btn btn-neutral w-full my-5" type="submit" value="Update Product" />
                </form>
            </div>
        </div>
    );
};

export default UpdateProducts;