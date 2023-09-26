import toast, { Toaster } from 'react-hot-toast';
const Description = ({ cardDescription }) => {
    const { id, title, description_picture, price} = cardDescription || {};

    const handleDonate = () =>{
        
        
        const donationItems = JSON.parse(localStorage.getItem('donation')) || [];

        if(!donationItems){
            donationItems.push(cardDescription);
            localStorage.setItem('donation', JSON.stringify(donationItems));
            toast.success('Donated Successfully!');
        }
        else{
            donationItems.push(cardDescription);
            localStorage.setItem('donation', JSON.stringify(donationItems));
            toast.success('Donated Successfully!');
            
        }
    }

    return (
        <div className="mx-10 py-20">
            <img src={description_picture} className="w-10/12 h-4/6 relative" alt={""} />
            <div className="bg-black w-32"> 
                <div className="absolute bottom-1 ml-7">
                    <button onClick={handleDonate} className="btn border-0 bg-[#FF444A] text-white">Donate ${price}</button>
                </div>
            </div>
            <h1 className="text-4xl font-bold">{title}</h1>
            <Toaster></Toaster>
        </div>
        
    );
};

export default Description;
