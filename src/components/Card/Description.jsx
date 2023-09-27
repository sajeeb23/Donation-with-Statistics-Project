import toast, { Toaster } from 'react-hot-toast';
const Description = ({ cardDescription }) => {
    const { id, title, description, description_picture, price } = cardDescription || {};

    const handleDonate = () => {


        const donationItems = JSON.parse(localStorage.getItem('donation')) || [];

        if (!donationItems) {
            donationItems.push(cardDescription);
            localStorage.setItem('donation', JSON.stringify(donationItems));
            toast.success('Donated Successfully!');
        }
        else {
            donationItems.push(cardDescription);
            localStorage.setItem('donation', JSON.stringify(donationItems));
            toast.success('Donated Successfully!');

        }
    }

    return (
        <div className="relative mx-10 py-20">
            <div className="lg:relative md:relative w-10/12 h-4/6">
                <img src={description_picture} className="w-full h-full justify-center" alt="" />
                <div className="absolute bottom-0 left-0 w-full md:h-1/4 lg:h-1/6 bg-black opacity-0 md:opacity-40 lg:opacity-40"></div>
                <div className="lg:absolute md:absolute bottom-3 left-3 w-full h-full flex items-end justify-start p-4">
                    <button onClick={handleDonate} className="btn border-0 bg-[#FF444A] text-sm md:text-base lg:text-lg text-white">
                        Donate ${price}
                    </button>
                </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-4xl mt-14 font-bold relative">{title}</h1>
            <p className='w-full lg:w-4/5 mt-6 text-base font-normal'>{description}</p>
            <Toaster></Toaster>
        </div>



    );
};

export default Description;
