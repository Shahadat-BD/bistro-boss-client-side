import React from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hook/useAxiosSecure/useAxiosSecure';
import { MdDelete } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const {refetch , data : users = []} = useQuery({
        queryKey :['users'],
        queryFn : async()=>{
            const res = await axiosSecure.get('/user')
              return  res.data
        }
    })
      // create admin 
    const handleMakeAdmin = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to admin this user!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I make admin this user!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/user/admin/${user._id}`)
                .then(res => {
                    if (res.data.modifiedCount > 0) {
                        Swal.fire({
                            title: "admin!",
                            text: `${user.name} is an admin now.`,
                            icon: "success"
                          });
                       refetch()
                    }
                })
            }
          })
    }

    const handleDeleteUser = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be delete this user!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/user/${id}`)
                .then(res =>{
                   if (res.data.deletedCount > 0) {
                       Swal.fire({
                           title: "Deleted!",
                           text: "user has been deleted successfully.",
                           icon: "success"
                         });
                      refetch()
                   }
                })
            }
          });
         
    }

return (
        <div className='pt-5 lg:px-20'>
            <div className='-mt-16 -mb-7'>
               <SectionTitle title={'MANAGE ALL USERS'} heading={'---How Many??---'}></SectionTitle>
            </div>
          {/* all user table */}
          <div className='bg-[white] p-8 mb-10'>
             <p className='uppercase text-xl font-semibold logo mb-5'>Total Users : {users.length} </p>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-[#D1A054] text-white'>
                            <tr>
                                <th>NUMBER</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>ROLE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row */}

                            {
                                 users.map((user,index) =>
                                    <tr key={user._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                           {user.name}
                                        </td>
                                        <td>
                                           {user.email}

                                        </td>
                                        <td>
                                            {user.role === 'admin' ? 'Admin' : <button  onClick={()=>handleMakeAdmin(user)} className='bg-[#D1A054] p-2 rounded-md'><FaUsers className='text-white text-2xl'/></button>}
                                        </td>
                                        <th>
                                            <button onClick={()=>handleDeleteUser(user._id)} className="bg-red-500 text-white p-2 rounded-md"><MdDelete className='text-2xl'/></button>
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

export default AllUsers;