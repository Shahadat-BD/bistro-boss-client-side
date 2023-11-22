import React from 'react';
import useMenu from '../../../Hook/useMenu/useMenu';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import { MdDelete} from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import useAxiosSecure from '../../../Hook/useAxiosSecure/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [refetch,menu] = useMenu()
    const axiosSecure = useAxiosSecure()

    const handleDeleteItem = item =>{
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
            axiosSecure.delete(`/foodMenu/${item._id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item?.name} has been deleted successfully.`,
                        icon: "success"
                      });
                 
                    }
            })
            }
        })

    }


    return (
        <div className='pt-5 lg:px-20  bg-[#F6F6F6] h-[100%]'>
        <div className='-mt-16 -mb-7'>
           <SectionTitle title={'MANAGE ALL ITEMS?'} heading={'---Hurry Up!---'}></SectionTitle>
        </div>
        <div className='bg-[white] p-8 mb-10'>
            <div className='mb-5'>
                <p className='uppercase logo text-xl font-semibold'>Total Item : {menu.length} </p>
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
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}

                        {
                            menu.map((cart,index) =>
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
                                        {/* updateItem/:id */}
                                    <Link to={`/dashboard/updateItem/${cart._id}`}>
                                     <button className="bg-[#D1A054] text-white p-2 rounded-md"><FaEdit className='text-xl' /></button>
                                    </Link>
                                    </th>
                                    <th>
                                        <button onClick={()=>handleDeleteItem(cart)} className="bg-red-500 text-white p-2 rounded-md"><MdDelete className='text-xl' /></button>
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

export default ManageItems;