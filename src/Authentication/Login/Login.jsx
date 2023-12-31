import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hook/useAxiosPublic/useAxiosPublic";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const axiosPublic = useAxiosPublic()
  const [showPassword, setShowPassword] = useState(false)
  const { setUser, signInUser, googleSignIn } = useContext(AuthContext);
  const from = location.state?.from.pathname || '/'

  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then((result) => {
        setUser(result.user);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: 'user logged in successfully',
          showConfirmButton: false,
          timer: 1500
        });
        navigate(from);
      })
      .catch((error) => {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 1500
        });
      });
  };

  // login with google 
  const handleGoogleSignIn = () => {
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
        });
         console.log('user logged in info',res.data);
         navigate(location.state?.from.pathname || '/')
            
      })
      setUser(result.user)
  })
      .catch((error) => {
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
              Login Now
            </h1>
            <form className="px-5 pt-3" onSubmit={handleLoginForm}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <span onClick={() => setShowPassword(!showPassword)} className='absolute lg:ml-[365px] ml-[300px] md:ml-[350px] mt-[52px] cursor-pointer'>{showPassword ? <FiEye /> : <FiEyeOff />}</span>
              </div>
              <div className="form-control mt-6">
                <input className="text-white border-none cursor-pointer bg-pink-600 py-3 text-lg font-semibold rounded-md"
                  value={'Login'}
                  type="submit"
                >
                </input >
              </div>
              <p className="text-center my-2">-----or-----</p>
            </form>
            <div onClick={handleGoogleSignIn} className="flex cursor-pointer justify-center items-center border border-pink-600 rounded-md py-3 mx-5 ">
              <FcGoogle className="text-lg font-semibold mr-4" />
              <button> Login With Google</button>
            </div>
            <div className="my-4">
              <p className="text-center">
                A New User ? please{" "}
                <Link to={"/register"} className="text-pink-500">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;