
const Banner = () => {
    return (
        <div className="hero h-[300px] sm:h-[300px] lg:h-[600px] bg-[url('https://assets.goal.com/images/v3/blt4ac7ff8ea28ed2ac/X_CRAZYFAST_MESSI.1_FIRM_GROUND_CLEATS.jpg')]">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
                    <p className="mb-5">Adidas AG is a German athletic apparel and footwear corporation headquartered in Herzogenaurach, Bavaria, Germany.</p>
                    <button className="btn">Start Buying</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;