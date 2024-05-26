import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
    const navigate = useNavigate();
    const handelAddProduct = async event => {
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
        await fetch("http://localhost:3000/shoes", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success("Product Added Successfully");
                    form.reset();
                    navigate('/dashboard/all-product')
                }
                else {
                    toast.error("Something went wrong!!");
                }
            })

    };

    return (
        <div>
            <h1 className="text-center text-2xl font-bold">Add Product</h1>
            <div className="">
                <form onSubmit={handelAddProduct}>
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
                            required
                        />
                    </label>

                    <input className="btn btn-neutral w-full my-5" type="submit" value="Add Product" />
                </form>
            </div>
        </div>
    );
};

export default AddProducts;