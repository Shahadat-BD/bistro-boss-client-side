import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { BsBookmarkCheckFill, BsCalendar2DateFill, BsCartCheckFill, BsHouseCheckFill, BsPaypal, } from "react-icons/bs";
import { MdContacts, MdReviews, MdShoppingBag } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import useCart from '../Hook/useCart/useCart';

const Dashboard = () => {
    const [cart] = useCart()
    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-[#D1A054]'>
                <ul className='menu'>
                    <div className='text-center my-5'>
                        <p className="text-2xl logo font-extrabold tracking-medium text-[#151515]">BISTRO BOSS</p>
                        <p className='uppercase text-lg logo font-medium tracking-large text-[#151515]'>Restaurant</p>
                    </div>
                    <li className='logo text-lg font-medium'>
                        <NavLink
                            style={({ isActive }) => ({
                                color: isActive ? "white" : "black",
                                background: isActive ? "none" : "none",
                            })}
                            to={'/dashboard/reservation'}> <BsHouseCheckFill className='text-xl mr-2' />USER HOME
                        </NavLink>
                    </li>
                    <li className='logo text-lg font-medium'>
                        <NavLink
                            style={({ isActive }) => ({
                                color: isActive ? "white" : "black",
                                background: isActive ? "none" : "none",
                            })}
                            to={'/dashboard/reservation'}> <BsCalendar2DateFill className='text-xl mr-2' />RESERVATION
                        </NavLink>
                    </li>
                    <li className='logo text-lg font-medium'>
                        <NavLink
                            style={({ isActive }) => ({
                                color: isActive ? "white" : "black",
                                background: isActive ? "none" : "none",
                            })}
                            to={'/dashboard/payment_history'}><BsPaypal className='text-xl mr-2' /> PAYMENT HISTORY
                        </NavLink>
                    </li>
                    <li className='logo text-lg font-medium'>
                        <NavLink
                            style={({ isActive }) => ({
                                color: isActive ? "white" : "black",
                                background: isActive ? "none" : "none",
                            })}
                            to={'/dashboard/cart'}><BsCartCheckFill className='text-xl mr-2' /> MY CART ({cart.length})
                        </NavLink>
                    </li>
                    <li className='logo text-lg font-medium'>
                        <NavLink
                            style={({ isActive }) => ({
                                color: isActive ? "white" : "black",
                                background: isActive ? "none" : "none",
                            })}
                            to={'/dashboard/add_review'}><MdReviews className='text-xl mr-2' /> ADD REVIEW
                        </NavLink>
                    </li>
                    <li className='logo text-lg font-medium'>
                        <NavLink
                            style={({ isActive }) => ({
                                color: isActive ? "white" : "black",
                                background: isActive ? "none" : "none",
                            })}
                            to={'/dashboard/my_booking'}><BsBookmarkCheckFill className='text-xl mr-2' /> MY BOOKING
                        </NavLink>
                    </li>

                    <hr className='my-5' />
                    <li className='logo text-lg font-medium'>
                        <NavLink
                            className={'hover:text-white'}
                            style={({ isActive }) => ({
                                background : isActive ? 'none' : 'none'
                            })}
                            to={'/'}> <BsHouseCheckFill className='text-xl mr-2' /> HOME
                        </NavLink>
                    </li>
                    <li className='logo text-lg font-medium'>
                        <NavLink
                            className={'hover:text-white'}
                            style={({ isActive }) => ({
                                background : isActive ? 'none' : 'none'
                            })}
                            to={'/menu'}> <IoMenu className='text-xl mr-2' /> MENU
                        </NavLink>
                    </li>
                    <li className='logo text-lg font-medium'>
                        <NavLink
                           className={'hover:text-white'}
                           style={({ isActive }) => ({
                               background : isActive ? 'none' : 'none'
                           })}
                            to={'/order/offered'}><MdShoppingBag className='text-xl mr-2' /> SHOP
                        </NavLink>
                    </li>
                    <li className='logo text-lg font-medium'>
                        <NavLink
                        className={'hover:text-white'}
                        style={({ isActive }) => ({
                            background : isActive ? 'none' : 'none'
                        })}
                            to={'/contact'}><MdContacts className='text-xl mr-2' /> CONTACT
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;