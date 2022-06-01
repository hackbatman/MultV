import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/sidebar/sidebar'
import Bodega from './bodega'

const config = () => {
    return (
        <>
            <div>
                <Sidebar brand="Ventas" />
            </div>
            <section className="home-section">
                <div className="home-content">
                    <div className="container-fluid">
                        <div className="card shadow mb-4">
                            <div className="card-header">
                                <h1>This is a configuration </h1>
                                <div className='border'>
                                    <ul  className='nav nav-tabs bg-secondary d-flex  justify-content-around'>
                                        <li className="nav-item ">
                                            <Link activeclassname="active" className="nav-link text-dark" to="/ventas">Config Profile</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link activeclassname="active" className="nav-link text-dark" to="/ventas">Venta Producto</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link activeclassname="active" className="nav-link text-dark" to="/ventas">Venta Producto</Link>
                                        </li>
                                    </ul>


                                </div>
                                <Bodega/>



                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default config
