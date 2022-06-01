import {Navigate, Outlet,useLocation } from "react-router-dom";
import useAuth from "../../auth/useAuth";

const  PrivateRoute=()=> {
  const auth=useAuth();
  //const dates=auth.sucursal ? <Outlet/>:<Navigate to= "/acces/sucursal"/>
 return  auth.user ? <Outlet/>:<Navigate to= "/login"/> ||auth.sucursal ? <Outlet/>:<Navigate to= "/acces/sucursal"/>;
  
  
    
};
export default PrivateRoute


