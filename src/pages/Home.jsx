import { useLoaderData } from "react-router-dom";
import Accordian from "../components/Home/Accordian";
import Banner from "../components/Home/Banner";
import Products from "../components/Home/Products";

const Home = () => {
    const shoes = useLoaderData();
    console.log(shoes)
    return (
        <div>
            <Banner />
            <Products shoes={shoes} />
            <Accordian />
        </div>
    );
};

export default Home;