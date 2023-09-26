import React from "react";
import { Link } from "react-router-dom";

const DonationCards = ({ card }) => {
    const { id, title, category, category_bg_color, text_and_button_bg_color } = card;

    return (
        <div>
            <div className={`relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md`} style={{ backgroundColor: category_bg_color }}>
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={card.picture}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <p>
                        <span className="bg-red-500 py-1 px-2 rounded" style={{ background: category_bg_color, color: text_and_button_bg_color }}>
                            {category}
                        </span>
                    </p>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-black antialiased">
                        {title}
                    </h4>
                    <p>${card.price}</p>
                    <Link to={`/card/${id}`}>
                        <button className={`btn text-white`} style={{ background: text_and_button_bg_color }}>
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DonationCards;
