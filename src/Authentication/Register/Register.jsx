import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { updateProfile } from "firebase/auth";
import {FiEye,FiEyeOff} from 'react-icons/fi'
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../Hook/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";
const Register = () => {
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const location = useLocation();
    const [showPassword,setShowPassword] = useState(false)
    const {googleSignIn,setUser,createSignInUser} = useContext(AuthContext)
    const from = location.state?.from.pathname || '/'
    const handleRegisterForm = e =>{
           e.preventDefault()
           const name = e.target.name.value
           const email = e.target.email.value
           const password = e.target.password.value
           const photoURL = e.target.photoURL.value
       
        const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/;

        if (password.length < 6) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "password must be 6 character",
            showConfirmButton: false,
            timer: 1500
          });
        }
         else if (!regex.test(password)) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: 'at least one uppercase and one special character',
            showConfirmButton: false,
            timer: 1500
          });
          } 
          else{
            createSignInUser(email,password)
            .then((result)=>{
              //  update user created
               updateProfile(result.user,{
                displayName : name,
                photoURL : photoURL,
               })
               .then(()=>{
                  console.log('profile updated');
                  window.location.reload(true)
               })
               setUser(result.user)
               navigate(location.state?.from.pathname || '/')
              const userInfo = { name : name, email : email}
              axiosPublic.post('/user',userInfo)
              .then(res => {
                 if (res.data.insertedId) {
                  Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "user created successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                 }
              })

            })
            .catch((error)=>{
              Swal.fire({
                position: "top-center",
                icon: "error",
                title: error.message,
                showConfirmButton: false,
                timer: 1500
              });
            })
          }

    }
     
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then((result)=>{
            const userInfo = {
              name  : result.user.displayName,
              email : result.user.email
            }
            axiosPublic.post('/user',userInfo)
            .then(res => {
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "user logged in successfully",
                showConfirmButton: false,
                timer: 1500
              });;                  
            })
            setUser(result.user)
            navigate(location.state?.from.pathname || '/')
        })
        .catch((error)=>{
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: error.message,
            showConfirmButton: false,
            timer: 1500
          });
        })
    }

  return (
    <div>
      <div>
        <div className="hero-content">
          <div className="card flex-shrink-0 w-full max-w-md bg-gray-200  dark:bg-base-100">
            <h1 className="text-3xl font-semibold text-center mt-3 text-pink-600">
              Register Now
            </h1>
            <form className="px-5 pt-3" onSubmit={handleRegisterForm}>
              <div className="form-control mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="write your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mb-5">
                <input
                  type="email"
                  name="email"
                  placeholder="write your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mb-5">
                <input
                  type="text"
                  name="photoURL"
                  placeholder="write your photo url"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mb-5"> 
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <span onClick={()=>setShowPassword(!showPassword)} className='absolute lg:ml-[365px] ml-[300px] md:ml-[350px] mt-[15px] cursor-pointer'>{showPassword ? <FiEye/> : <FiEyeOff/>}</span>
              </div>

              <div className="form-control mt-6">
                <input  className="text-white border-none cursor-pointer bg-pink-500 py-3 text-lg font-semibold rounded-md"
                  type="submit"
                  value={'Register'}
                >
               
                </input>
              </div>
            <p className="text-center my-2">-----or-----</p>
            </form>
            <div onClick={handleGoogleSignIn} className="flex cursor-pointer justify-center items-center border border-pink-600 rounded-md py-3 mx-5 ">
              <FcGoogle className="text-lg font-semibold mr-4" />
              <button> Login With Google</button>
            </div>
            <div className="my-4">
              <p className="text-center">
                Already have an account ? please{" "}
                   <Link to={"/login"} className="text-pink-600">
                     Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;