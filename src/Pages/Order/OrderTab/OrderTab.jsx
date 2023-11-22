import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../Hook/useAxiosSecure/useAxiosSecure';
import useCart from '../../../Hook/useCart/useCart';

const OrderTab = ({items}) => {
   const navigate = useNavigate()
   const location = useLocation()
   const {name,recipe,image,price,_id} = items
   const {user} = useContext(AuthContext)
   const [, refetch] = useCart()
   const axiosSecure = useAxiosSecure()

     const handleAddToCart = () => {
        if (user && user.email) {
         const cartItem = {
            menuId :_id,
            email : user.email,
            name,
            image,
            price
         }
             axiosSecure.post('/carts',cartItem)
             .then(res => {
                 if (res.data.insertedId) {
                  Swal.fire({
                     position: "top-center",
                     icon: "success",
                     title: "Your item successfully added",
                     showConfirmButton: false,
                     timer: 1500
                   });
                  //  refetch cart to update the cart items count
                   refetch()
                 }
             })

      }
          else{
            Swal.fire({
                title: "Your are not logged In?",
                text: "please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                   navigate('/login', {state:{from : location}})
                }
              });
           }
     }
    return (
        <div>
             <div className='text-center bg-gray-100 relative'>
                <img className='w-full h-[300px]' src={image}  />
                 <p className='text-xl font-bold mt-3'>{name}</p>
                 <p>{recipe}</p>
                 <p className='bg-black text-white font-bold absolute top-3 right-3 p-3'>${price}</p>
                 <button onClick={handleAddToCart} className='uppercase mb-5 mt-2 text-[#BB8506] px-5 py-3 hover:bg-black  rounded-md border-b-2 border-[#BB8506] bg-gray-200'>Add To Cart</button>
            </div>
        </div>
    );
};

export default OrderTab;