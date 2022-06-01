import {Navigate, Outlet } from "react-router-dom";
import useAuth from "../../auth/useAuth";

const  PublicRoute=()=> {
  const auth=useAuth();

  return !auth.user ? <Outlet/>:<Navigate to= "/" />;
    
};
export default PublicRoute
