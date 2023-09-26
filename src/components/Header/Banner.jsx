const Banner = () => {
    return (
        <div className="relative h-screen">
            <img src="/src/assets/Banner.jpg" className="opacity-10 w-full h-full" alt="" />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
                <h1 className="text-xl md:text-4xl lg:text-6xl font-bold text-black mb-4">
                    I Grow By Helping People In Need
                </h1>
                <div className="p-4 rounded-lg flex">
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="w-64 lg:w-80 p-2 border border-[#FF444A] rounded-l-lg outline-none"
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
