import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    

    const [sucursal, setSucursal] = useState(
        JSON.parse(localStorage.getItem("sucursal")) || null
    );

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    const [roles, setRoles] = useState(
        JSON.parse(localStorage.getItem("roles")) || null
    );
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("sucursal", JSON.stringify(sucursal))
        localStorage.setItem("roles", JSON.stringify(roles))
    }, [user, sucursal,roles])

    return <AuthContext.Provider value={{sucursal, setSucursal,user, setUser, roles,setRoles }}>
        {children}
    </AuthContext.Provider>
}
export default AuthProvider