import { useEffect, useState } from "react";
import SingleProducts from "../components/Home/SingleProducts";

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/shoes")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div>
            <h1 className="text-center text-4xl font-bold my-5">All Products : {products.length}</h1>
            <hr />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 my-10">
                {
                    // eslint-disable-next-line react/prop-types
                    products.map(shoe => <SingleProducts
                        key={shoe.id}
                        shoe={shoe}
                    />)
                }

            </div>
        </div>
    );
};

export default AllProducts;