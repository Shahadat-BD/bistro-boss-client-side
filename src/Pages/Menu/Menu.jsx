import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import image from "../../assets/menu/banner3.jpg";
import useMenu from '../../Hook/useMenu/useMenu';
import SectionTitle from '../../Component/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';
import MenuItemBg from './MenuItemBg/MenuItemBg';
const Menu = () => {
    const [menu] = useMenu()
    const offeredItems = menu.filter(menu => menu.category === 'offered')
    const dessertItem = menu.filter(menu => menu.category === 'dessert')
    const pizzaItem = menu.filter(menu => menu.category === 'pizza')
    const saladsItem = menu.filter(menu => menu.category === 'salad')
    const soupsItem = menu.filter(menu => menu.category === 'soup')
    return (
        <div>
            <Helmet>
                 <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover image={image} title={'OUR MENU'} para={'Would you like to try a dish?'}></Cover>
            <SectionTitle title={"TODAY'S OFFER"} heading={"---Don't miss---"}></SectionTitle>
            <MenuCategory title={'offered'} items={offeredItems}></MenuCategory>
            <MenuItemBg  title={'DESSERTS'} para={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuItemBg>
            <MenuCategory title={'dessert'} items={dessertItem}></MenuCategory>
            <MenuItemBg title={'PIZZA'} para={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuItemBg>
            <MenuCategory title={'pizza'} items={pizzaItem}></MenuCategory>
            <MenuItemBg title={'SALADS'} para={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuItemBg>
            <MenuCategory title={'salad'} items={saladsItem}></MenuCategory>
            <MenuItemBg title={'SOUPS'} para={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuItemBg>
            <MenuCategory title={'soup'} items={soupsItem}></MenuCategory>
        </div>
    );
};

export default Menu;