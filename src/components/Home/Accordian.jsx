
const Accordian = () => {
    return (
        <section className="my-5 p-10">
            <h1 className="text-3xl text-center font-bold">Whats New</h1>
            <div className="collapse collapse-arrow bg-base-200 my-5">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                Adidas Predator
                </div>
                <div className="collapse-content">
                    <p>Coming Soon</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Adidas X Series
                </div>
                <div className="collapse-content">
                    <p>X111 on sell</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 my-5">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    New Year Collection
                </div>
                <div className="collapse-content">
                    <p>20%</p>
                </div>
            </div>
        </section>
    );
};

export default Accordian;