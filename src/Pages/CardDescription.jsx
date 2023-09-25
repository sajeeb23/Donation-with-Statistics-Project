import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CardDescription = () => {

        const [cardDescription, setCardDescription] = useState()

        const {id} = useParams()
        
        const cards = useLoaderData()
        

        useEffect(()=>{
            const findCard = cards?.find(cardDescription => cardDescription.id == id)
            console.log(findCard);
            setCardDescription(findCard)
        },[id, cards])
         
        return (
        <div>
            <h1></h1>
        </div>
    );
};

export default CardDescription;