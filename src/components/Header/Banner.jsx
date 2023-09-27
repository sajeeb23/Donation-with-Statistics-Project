import React, { useState } from "react";

const Banner = ({ cards, setFilteredCards }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        const trimmedQuery = searchQuery.trim().toLowerCase();

        const filtered = cards.filter((card) =>
            card.category.toLowerCase().includes(trimmedQuery)
        );

        setFilteredCards(filtered);
    };

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
                        placeholder="Search by category..."
                        className="w-64 lg:w-80 p-2 border border-[#FF444A] rounded-l-lg outline-none"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button
                        type="button"
                        className="bg-[#FF444A] text-white p-2 rounded-r-lg hover:bg-orange-600"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
