import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover 
               img={menuImg}
               title='Our Menu'
               details={'Would you Like to try a dish?'}
            ></Cover>
            {/* main cover */}
            <SectionTitle 
               subHeading = {"Don't Miss"}
               heading = {"Today's Offer"}
            ></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory 
            items={dessert}
            img={dessertImg}
            title='Desserts'
            ></MenuCategory>
            {/* soup menu items */}
            <MenuCategory 
            items={soup}
            title={"Soup"}
            img={soupImg}
            ></MenuCategory>
            {/* salad menu items */}
            <MenuCategory 
            items={salad}
            title={"Salad"}
            img={saladImg}
            ></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory 
            items={pizza}
            title={"Pizza"}
            img={pizzaImg}
            ></MenuCategory>
           
        </div>
    );
};

export default Menu;