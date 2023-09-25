
import Card from "./Card";

const Cards = ({ cards }) => {
    return (
        <div className="py-32 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {cards?.map(card => (
                <Card key={card.id} card={card} />
            ))}
        </div>
    );
};

export default Cards;
