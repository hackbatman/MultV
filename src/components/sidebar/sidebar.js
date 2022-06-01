import "./sidebar.css"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { faAlignJustify, faAssistiveListeningSystems, faClipboardList, faHome, faSearch, faShapes, faShoppingBag, faSignOutAlt, faTools, faUserAstronaut, faVestPatches } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuth from "../../auth/useAuth";
import axios from 'axios';

const Sidebar = ({ brand }) => {
    const [nomSuc, setNomSuc] = useState([]);
    const [sidebar, setSidebar] = useState(false);


    const showSidebar = () => setSidebar(!sidebar);
    const auth = useAuth();

    const { setUser, setSucursal } = useAuth();
    const navigate = useNavigate();
    const initialStateSucursal={
            "id": 0,
            "nombre": "initial",
            "images": "inital",
            "direccion": "initial"
          }






    const logout = async () => {
        setUser(null);
        setSucursal(initialStateSucursal);
        navigate('/login');

    }

    return (
        <>
            <div className="sidebar">
                <div className="logo-details">
                    <i><FontAwesomeIcon icon={faAssistiveListeningSystems} /></i>



                    <span className="logo_name">{auth.sucursal.nombre}</span>

                </div>
                <ul className="nav-links">
                    <li>
                        <NavLink activeclassname="active" to='/'>
                            <i><FontAwesomeIcon icon={faHome} /></i>
                            <span className="links_name" onClick={showSidebar}>Home</span>
                        </NavLink>
                    </li>
                    <li>

                        <NavLink activeclassname="active" to='/inventario'>
                            <i><FontAwesomeIcon icon={faShapes} /></i>
                            <span className="links_name">Product</span>
                        </NavLink>

                    </li>
                    <li>

                        <NavLink activeclassname="active" to='/ventas'>
                            <i><FontAwesomeIcon icon={faShoppingBag} /></i>
                            <span className="links_name">Ventas</span>
                        </NavLink>

                    </li>
                    <li>

                        <NavLink activeclassname="active" to='/Cliente'>
                            <i><FontAwesomeIcon icon={faUserAstronaut} /></i>
                            <span className="links_name">Client</span>
                        </NavLink>

                    </li>

                    <li>

                        <NavLink activeclassname="active" to='/reporte'>
                            <i><FontAwesomeIcon icon={faClipboardList} /></i>
                            <span className="links_name">Report</span>
                        </NavLink>

                    </li>

                    <li>

                        <NavLink activeclassname="active" to='/config'>
                            <i><FontAwesomeIcon icon={faTools} /></i>
                            <span className="links_name">Setting</span>
                        </NavLink>

                    </li>
                    <li className="log_out">

                        <button onClick={logout} className="btn btn-blanck" activeclassname="active" >
                            <i><FontAwesomeIcon icon={faSignOutAlt} /></i>
                            <span className="links_name">Log out</span>
                        </button>

                    </li>
                </ul>
            </div >
            <section className="home-section">
                <nav>
                    <div className="sidebar-button">
                        <i className='sidebarBtn'><FontAwesomeIcon icon={faAlignJustify} /></i>
                        <span className="dashboard">{brand}</span>
                    </div>
                    <div className="profile-details user-wrapper" id="panelc">
                        <img className="logo-admin " src={auth.user.photos} alt="" />
                        <span className="admin_name">{auth.user.name}</span>

                        <span className="admin_name roles-name">{auth.roles.nombre}</span>

                        <div className="cerrar">
                            <p >Ver Perfil</p>
                            <p><Link to="/bodega">ver Bodega</Link></p>
                            <p><Link to="/acces/sucursal">Cambiar sucursal</Link></p>
                            <p><button onClick={logout} >Cerrar</button></p>
                        </div>
                    </div>
                </nav>
            </section>





        </>

    )

}

export default Sidebar
