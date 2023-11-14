import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast("user logOut successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };


  const link = <>
    <li><Link to={'/'}>Home</Link></li>
    <li><Link to={'/contact'}>Contact</Link></li>
    <li><a>Dashboard</a></li>
    <li><Link to={'/menu'}>Our Menu</Link></li>
    <li><Link to={'/order/offered'}>Our Food</Link></li>
    {
      user
        ? <li><Link onClick={handleLogOut}>Sign Out</Link></li>
        : <li><Link to={'/login'}>Sign In</Link></li>
    }
  </>

  return (
    <div className="navbar fixed z-20 font-bold bg-[#1111116d]  lg:text-white max-w-screen-xl  m-auto">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {link}
          </ul>
        </div>
        <div>
          <p className="text-xl  logo font-bold text-white">BISTRO BOSS</p>
          <p className='uppercase text-sm logo font-bold tracking-normal text-white'>Restaurant</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {link}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="m-1">
            { user 
              ? <img className="lg:w-12 lg:h-12 md:w-12 md:h-12 w-6 h-6 rounded-full mr-2" src={user.photoURL} alt="" />
              : ''
            }
          </label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow text-black bg-base-100 rounded-box w-52">
            <li><p className=''>{user && user.displayName}</p></li>
          </ul>
        </div>
        <a className="btn">Get Started</a>
      </div>
    </div>
  );
};

export default Navbar;