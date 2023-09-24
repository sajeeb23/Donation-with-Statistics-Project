const Banner = () => {
    return (
        <div className="relative">
            <img src="/src/assets/Banner.jpg" className="opacity-20 w-full" alt="" />
            <div className="absolute flex flex-col left-4 bottom-16 md:left-24 md:bottom-40 lg:bottom-80 lg:left-72 justify-center items-center">
                <h1 className="text-xl lg:text-6xl md:text-4xl font-bold mb-4">I Grow By Helping People In Need</h1>
                <div className="p-4 rounded-lg flex">
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="w-64 lg:w-80 p-2 border rounded-l-lg outline-none"
                    />
                    <button
                        type="button"
                        className="bg-[#FF444A] text-white p-2 rounded-r-lg hover:bg-orange-600"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
