import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

function navbar() {
    return (
        <>
            <ul className="nav nav-tabs bg-light">
                <li className="nav-item">
                    <Link activeclassname="active" className="nav-link" to="/ventas">Venta Producto</Link>
                </li>
                <li className="nav-item">
                    <Link activeclassname="active" className="nav-link" to="/venta/service">Servicio</Link>

                </li>
                <li className="nav-item">
                    <Link activeclassname="active" className="nav-link" to="/venta/credit">Venta Credito</Link>

                </li>
                
            </ul>

        </>
    )
}

export default navbar
