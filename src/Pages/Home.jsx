import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "../components/Card/Cards";
import Banner from "../components/Header/Banner";

const Home = () => {
    const initialCards = useLoaderData();
    const [filteredCards, setFilteredCards] = useState(initialCards);
    const clearFilters = () => {
        setFilteredCards([]);
    };

    return (
        <div>
            <Banner cards={initialCards} setFilteredCards={setFilteredCards} clearFilters={clearFilters} />

            <Cards cards={filteredCards} />
        </div>
    );
};

export default Home;
