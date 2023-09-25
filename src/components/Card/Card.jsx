import { Link } from "react-router-dom";

const Card = ({card}) => {
    const {id, title, picture, category, text_and_button_bg_color, card_bg_color, category_bg_color} = card || {}
     
    return (
        <div>
            <Link to={`/card/${id}`}>
            <div className="relative flex mx-auto w-10/12 lg:w-11/12 h-80 flex-col rounded-xl bg-clip-border shadow-md" style={{background: card_bg_color}}>
                <div className="relative h-96 overflow-hidden rounded-t-xl bg-white bg-clip-border ">
                    <img src={picture}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <div className="mb-2 items-center">
                        <p>
                        <span className="bg-red-500 py-1 px-2 rounded"style={{background: category_bg_color, color:text_and_button_bg_color}}>{category}</span>
                        </p>
                        <p className="block font-sans leading-relaxed font-semibold text-xl antialiased" style={{color:text_and_button_bg_color}}>
                           {title}
                        </p>
                        
                    </div>
                    
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Card;