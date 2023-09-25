import { useLoaderData } from "react-router-dom";
import Cards from "../components/Card/Cards";
import Banner from "../components/Header/Banner";

const Home = () => {

    const cards = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <Cards cards ={cards}></Cards>
        </div>
    );
};

export default Home;