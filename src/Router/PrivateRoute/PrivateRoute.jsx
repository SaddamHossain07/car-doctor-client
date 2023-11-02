import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const location = useLocation()

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div className="w-[400px] mx-auto text-center mt-16">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if (user?.email) {
        return children
    }

    return <Navigate state={location.pathname} to='/login' replace></Navigate>
};

export default PrivateRoute;