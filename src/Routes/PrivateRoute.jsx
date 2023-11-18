import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
  const location = useLocation()


    if (loading) {
     return <div className='text-center'><span className="loading loading-spinner loading-xs my-20"></span></div>
  }
    if (user) {
        return children
    }

    return <Navigate state={{from : location}} to={'/login'}></Navigate>
};

export default PrivateRoute;