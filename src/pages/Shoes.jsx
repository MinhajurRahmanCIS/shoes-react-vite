import { useLoaderData } from "react-router-dom";
import SingleProducts from "../components/Home/SingleProducts";

const Shoes = () => {
    const shoes = useLoaderData();
    return (
        <div className="my-10 p-5">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
            {
                // eslint-disable-next-line react/prop-types
                shoes.map(shoe => <SingleProducts
                    key={shoe.id}
                    shoe={shoe}
                />)
            }

        </div>
    </div>
    );
};

export default Shoes;