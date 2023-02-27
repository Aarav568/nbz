import { useSelector } from 'react-redux';
import { Navigate, Outlet } from "react-router-dom"

const AdminRoutes = () => {
    const currentUser = useSelector(state => state.user.currentUser)
    return ( 
        currentUser?.admin ? <Outlet /> : <Navigate to="/login" />
     );
}

export default AdminRoutes;