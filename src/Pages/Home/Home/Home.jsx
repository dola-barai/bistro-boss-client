import { Helmet } from "react-helmet-async";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import Banner from "./Banner/Banner";
import Board from "./Board/Board";

import Category from "./Category/Category";
import ChefRecommends from "./ChefRecommends/ChefRecommends";
import Contact from "./Contact/Contact";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Board></Board>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <ChefRecommends></ChefRecommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;