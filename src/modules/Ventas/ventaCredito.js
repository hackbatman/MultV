import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Navbar from '../../components/sidebar/navbar'
import VentasAdd from './VentasAdd'
import Sidebar from '../../components/sidebar/sidebar'
import Ventas from './ventas'



const VentaServicio = () => {
    const inputChange = () => {
        console.log("this is console")
    }
    var date = new Date();
    var displayTodayState = date.getDate + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    var dt = date.toDateString();
    return (

        <>
            <Sidebar />
            <section className="home-section">
                <div className="home-content">
                    <div className="container-fluid">
                        <div className="card shadow mb-4">

                            <div className="card-header">
                                <div className='card-section  d-flex'>
                                    <h2 className="m-2 font-weight-bold p-2 w-100 bd-highlight">Nueva Venta</h2>
                                    <div className="p-2 flex-shrink-1 bd-highlight">
                                        <p>fecha:{dt}</p>
                                    </div>
                                </div>
                            </div>
                            <Navbar />
                            <div className="card-body">
                                <form className="form-horizontal">
                                    <div className="row m-2">
                                        <div className='text-center'>
                                            <h5>Datos de cliente</h5>
                                        </div>
                                        <div className="col-md-4">
                                            <label>Cliente:</label>
                                            <div className="input-group">
                                                <input type="text" name='cliente' className="form-control" onChange={inputChange} />
                                                <span className="input-group-btn">
                                                    <button className="btn btn-primary" type="button"><span><FontAwesomeIcon icon={faSearch} /></span></button>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <label>NIT:</label>
                                            <div className="input-group">
                                                <input type="text" name='nit' className="form-control" onChange={inputChange} />
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <label>Direccion:</label>
                                            <div className="input-group">
                                                <input type="text" name='direccion' className="form-control" onChange={inputChange} />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <VentasAdd />
                            </div>


                        </div>
                    </div>
                </div>
            </section>








        </>
    )
}


export default VentaServicio

