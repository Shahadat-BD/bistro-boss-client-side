import { useContext } from "react";
import useAdmin from "../Hook/useAdmin/useAdmin";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLocation } from "react-router-dom";

const AdminRoutes = ({children}) => {
    const [isAdmin,isAdminLoading] = useAdmin()
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()


    if (loading || isAdminLoading) {
     return <div className='text-center'><span className="loading loading-spinner loading-xs my-20"></span></div>
  }
    if (user && isAdmin) {
        return children
    }

    return <Navigate state={{from : location}} to={'/login'}></Navigate>
}
export default AdminRoutes;