
const About = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://res.cloudinary.com/confirmed-web/image/upload/c_lfill,w_700,h_700/v1705909812/adidas-group/images/profile_fvaogz.jpg" className="max-w-xs md:max-w-md lg:max-w-2xl rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-6xl text-center font-bold">About</h1>
                    <p className="py-6 text-justify">Adidas AG is a German athletic apparel and footwear corporation headquartered in Herzogenaurach, Bavaria, Germany. It is the largest sportswear manufacturer in Europe, and the second largest in the world, after Nike. It is the holding company for the Adidas Group, which also owns an 8.33% stake of the football club Bayern München, and Runtastic, an Austrian fitness technology company. Adidas's revenue for 2018 was listed at €21.915 billion.
                        The company was started by Adolf Dassler in his mother's house. He was joined by his elder brother Rudolf in 1924 under the name Gebrüder Dassler Schuhfabrik ("Dassler Brothers Shoe Factory"). Dassler assisted in the development of spiked running shoes (spikes) for multiple athletic events. To enhance the quality of spiked athletic footwear, he transitioned from a previous model of heavy metal spikes to utilising canvas and rubber. Dassler persuaded U.S. sprinter Jesse Owens to use his handmade spikes at the 1936 Summer Olympics. In 1949, following a breakdown in the relationship between the brothers, Adolf created Adidas and Rudolf established Puma, which became Adidas's business rival. </p>
                    <button className="btn btn-primary w-full">Buy</button>
                </div>
            </div>
        </div>
    );
};

export default About;