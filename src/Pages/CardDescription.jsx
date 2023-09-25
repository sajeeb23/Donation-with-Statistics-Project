import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Description from "../components/Card/Description";

const CardDescription = () => {

        const [cardDescription, setCardDescription] = useState(null)

        const {id} = useParams()
        
        const cards = useLoaderData();
        

        useEffect(()=>{
            const findCard = cards?.find(cardDescription => cardDescription.id == id)
            console.log(findCard);
            setCardDescription(findCard)
        },[id, cards])
         
        return (
        <div>
            <Description cardDescription={cardDescription}></Description>
        </div>
    );
};

export default CardDescription;