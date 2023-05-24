import { Helmet } from 'react-helmet-async';
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu';
import FoodCart from '../../../components/FoodCart/FoodCart';
import { useParams } from 'react-router-dom';

const Order = () => {
    const catagories = ['Salad', 'Pizza', 'Soups', 'Desserts', 'Drinks']
    const {category} = useParams();
    const initialIndex = catagories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                img={orderCover}
                title='Order Food'
                details={'Would you Like to try a dish?'}
            ></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                <div className="grid grid-cols-3 gap-4">
                    {
                        salad.map(item => <FoodCart
                        key={item._id}
                        item={item}
                        ></FoodCart>)
                    }
                </div>
                </TabPanel>
                <TabPanel>
                <div className="grid grid-cols-3 gap-4">
                    {
                        pizza.map(item => <FoodCart
                        key={item._id}
                        item={item}
                        ></FoodCart>)
                    }
                </div>
                </TabPanel>
                <TabPanel>
                <div className="grid grid-cols-3 gap-4">
                    {
                        soup.map(item => <FoodCart
                        key={item._id}
                        item={item}
                        ></FoodCart>)
                    }
                </div>
                </TabPanel>
                <TabPanel>
                <div className="grid grid-cols-3 gap-4">
                    {
                        dessert.map(item => <FoodCart
                        key={item._id}
                        item={item}
                        ></FoodCart>)
                    }
                </div>
                </TabPanel>
                <TabPanel>
                <div className="grid grid-cols-3 gap-4">
                    {
                        drinks.map(item => <FoodCart
                        key={item._id}
                        item={item}
                        ></FoodCart>)
                    }
                </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;