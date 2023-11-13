import React, { useState } from 'react';
import Cover from '../../Shared/Cover/Cover';
import shopImage from "../../assets/shop/banner2.jpg";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderTab from './OrderTab/OrderTab';
import useMenu from '../../Hook/useMenu/useMenu';
import FoodCard from './FoodCard/FoodCard';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Order = () => {
    const [menu] = useMenu()
    const {category} = useParams()
    const categories = ['offered','dessert','pizza','salad','soup']
    const initialIndex = categories.indexOf(category)
    const [tabIndex,setTabIndex] = useState(initialIndex)

    
    const offeredItems = menu.filter(menu => menu.category === 'offered')
    const dessertItem = menu.filter(menu => menu.category === 'dessert')
    const pizzaItem = menu.filter(menu => menu.category === 'pizza')
    const saladsItem = menu.filter(menu => menu.category === 'salad')
    const soupsItem = menu.filter(menu => menu.category === 'soup')
    return (
        <div className='mb-16'>
             <Helmet>
                <title>Bistro Boss | Order Food</title>
             </Helmet>
             <Cover image={shopImage} title={'OUR SHOP'} para={'Would you like to try a dish?'}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
    <TabList>
      <Tab>Offered</Tab>
      <Tab>Dessert</Tab>
      <Tab>Pizza</Tab>
      <Tab>Salad</Tab>
      <Tab>Soup</Tab>
    </TabList>
    <TabPanel>
       <FoodCard items={offeredItems}></FoodCard>
    </TabPanel>

    <TabPanel>
       <FoodCard items={dessertItem}></FoodCard>
    </TabPanel>

    <TabPanel>
        <FoodCard items={pizzaItem}></FoodCard>
    </TabPanel>

    <TabPanel>
           <FoodCard items={saladsItem}></FoodCard>
    </TabPanel>

    <TabPanel>
     <FoodCard items={soupsItem}></FoodCard>      
    </TabPanel>

  </Tabs>
        </div>
    );
};

export default Order;