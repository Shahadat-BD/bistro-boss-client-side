import React from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import useCart from '../../../Hook/useCart/useCart';
import { MdDelete } from 'react-icons/md';
import useAxiosSecure from '../../../Hook/useAxiosSecure/useAxiosSecure';
import Swal from 'sweetalert2';

const Cart = () => {
    const [cart,refetch] = useCart()
    const axiosSecure = useAxiosSecure()
    const totalPrice = cart.reduce((total,item)=> total + item.price , 0)

    const handleDeleteItem = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be delete this item!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                .then(res =>{
                   if (res.data.deletedCount > 0) {
                       Swal.fire({
                           title: "Deleted!",
                           text: "Your item has been deleted successfully.",
                           icon: "success"
                         });
                      refetch()
                   }
                })
            }
          });
         
    }
    return (
        <div className='pt-5 bg-[#F6F6F6] h-[100%] lg:px-20'>
            <div className='-mt-20'>
               <SectionTitle title={'WANNA ADD MORE?'} heading={'---My Cart---'}></SectionTitle>
            </div>
            <div className='bg-[white] p-8 mb-10'>
                <div className='flex justify-between mb-5'>
                    <p className='uppercase font-semibold'>Total Order : {cart.length} </p>
                    <p className='uppercase font-semibold'>Total Price : ${totalPrice} </p>
                    <button className='bg-[#D1A054] text-white uppercase px-3 py-1 rounded-md'>Pay</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#D1A054] text-white rounded-2xl'>
                            <tr>
                                <th>
                                    Number
                                </th>
                                <th>Item Image</th>
                                <th>Iteme Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row */}

                            {
                                cart.map((cart,index) =>
                                    <tr key={cart._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={cart.image} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                           {cart.name}

                                        </td>
                                        <td>${cart.price}</td>
                                        <th>
                                            <button onClick={()=>handleDeleteItem(cart._id)} className="bg-red-500 text-white p-2 rounded-md"><MdDelete className='text-2xl' /></button>
                                        </th>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Cart;