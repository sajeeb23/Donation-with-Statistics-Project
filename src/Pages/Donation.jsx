import { useEffect, useState } from "react";
import DonationCards from "./DonationCards";

const Donation = () => {
    const [donation, setDonation] = useState([]);
    const [noFound, setNoFound] = useState("");
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donation'));
        if (donationItems) {
            setDonation(donationItems);
        } else {
            setNoFound('No data found!');
        }
    }, []);

    const handleRemove = () => {
        localStorage.clear()
        setDonation([])
        setNoFound('No data Found!')
    }

    return (
        <div className="my-32">
            {donation.length > 0 && <button onClick={handleRemove} className="btn btn-error text-white font-semibold block mx-auto">Remove All</button>}
            {noFound ? (
                <p className="py-64 flex justify-center items-center text-2xl">{noFound}</p>
            ) : (
                <div>
                    <div className="w-11/12  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 my-8">
                        {
                            isShow? donation.map((card) => (
                                <DonationCards key={card.id} card={card} />
                            )) 
                            : 
                            donation.slice(0,4).map((card) => (
                                <DonationCards key={card.id} card={card} />
                            ))
                        }
                    </div>
                    <div>
                        {donation.length > 4 && <button onClick={() => setIsShow(!isShow)} className="btn btn-info text-white font-semibold block mx-auto">{isShow ? "Show Less" : "Show More"}</button>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Donation;
