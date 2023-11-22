import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import useAxiosPublic from '../../../Hook/useAxiosPublic/useAxiosPublic';
import useAxiosSecure from '../../../Hook/useAxiosSecure/useAxiosSecure';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {
    const item = useLoaderData()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit,reset } = useForm()
    const {name,price,category,recipe,_id} = item

    const onSubmit =  async (data) => {
        // image upload to imageBB and get url.then send to database with others data.
         const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api,imageFile,{
            headers : {
                'content-type' : "multipart/form-data"
            }
        })
         if (res.data.success) {
            const price = parseFloat(data.price)
            const menuItem = {
                name : data.name,
                category : data.category,
                price : price,
                recipe: data.recipe,
                image : res.data.data.display_url
            }
           
          reset()
            const menuRes = await axiosSecure.patch(`/foodMenu/${_id}`,menuItem)
                 if (menuRes.data.modifiedCount > 0) {
                    alert('updated successfully')
                 }
         }
    }

    return (
        <div className='pt-5 pb-10 lg:px-20 bg-white'>
            <div className='-mt-16 -mb-7'>
                <SectionTitle title={"UPDATE ITEM"} heading={"---refresh item---"}></SectionTitle>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='bg-[#F3F3F3] lg:p-8'>

<div className='form-control w-full my-2'>
    <label className='label'>
        <span className='label-text'>Recipe Name</span>
    </label>
    <input
        type='text'
        defaultValue={name}
        {...register("name",{required:true})}
        placeholder='Recipe name'
        className='input input-bordered w-full'
    />
</div>

<div className='flex gap-5'>
    {/* category */}
   <div className='form-control w-full'>
   <label className='label'>
        <span className='label-text'>Category</span>
    </label>
    <select defaultValue={category} {...register("category",{required:true})}
        className='select select-bordered w-full'
    >
        <option disabled value='default'>Select a category</option>
        <option value="dessert">Dessert</option>
        <option value="pizza">Pizza</option>
        <option value="offered">Offered</option>
        <option value="pizza">Pizza</option>
        <option value="soup">Soup</option>
    </select>
   </div>
  {/* Price */}
   <div className='form-control w-full'>
   <label className='label'>
        <span className='label-text'>Price</span>
    </label>
    <input
        type='text'
        defaultValue={price}
        {...register("price",{required:true})}
        placeholder='Price'
        className='input input-bordered w-full'
    />
   </div>
</div>

<div className='form-control w-full my-2'>
    <label className='label'>
        <span className='label-text'>Recipe Details</span>
    </label>
    <textarea
        type='text'
        defaultValue={recipe}
        {...register("recipe",{required:true})}
        placeholder='Recipe details'
        className='textarea textarea-bordered w-full h-32'
        
    />
</div>
  <div className='my-5'>
  <input {...register("image")} type="file" className="w-full" />
  </div>
{/* className='bg-[#D1A054] text-white px-5 py-2 mt-3 rounded-sm' */}
   <button className='btn bg-[#D1A054] text-white' type='submit'>
     Add Item <FaUtensils/>
   </button>

</form>

        </div>
    );
};

export default UpdateItem;