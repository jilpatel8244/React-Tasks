import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
    const isLoggedIn = localStorage.getItem('user');

    return isLoggedIn ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoute;