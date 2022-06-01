import React from 'react'
import Sidebar from '../../components/sidebar/sidebar'
import './report.css'
function report() {
    return (
        <>
            <Sidebar />
            <div className='home-section'>
                <div className='home-content'>
                    <div className='container-fluid'>
                        <div className="card shadow mb-4">
                            <div className="card-header">
                                <div className='section-lateral d-flex'>
                                    <h2 className="m-2 font-weight-bold p-2 w-100 bd-highlight">Reporte de Venta</h2>

                                </div>
                            </div>
                            <div className='card-body'>
                                <div className='row d-flex justify-content-center'>
                                    <div className='col-md-10 bg-light text-center'>
                                        <p>Venta del dia</p>
                                        <div className='bg-light'>
                                            <div className='text-end'>
                                                <h5>vendedor:</h5>
                                                <h6>Santos Augus</h6>
                                            </div>
                                            <table className='table table-hover table-warning'>
                                                <thead className='table-dark'>
                                                <tr>
                                                        <th>ID</th>
                                                        <th>Factura</th>
                                                        <th>Cliente</th>
                                                        <th>Fecha</th>
                                                        <th>total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>12</td>
                                                        <td>121121</td>
                                                        <td>CF</td>
                                                        <td>15-03-22</td>
                                                        <td>2000</td>

                                                    </tr>
                                                    <tr>
                                                        <td>13</td>
                                                        <td>133434</td>
                                                        <td>Rios Rivera</td>
                                                        <td>15-03-22</td>
                                                        <td>12300</td>


                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className='text-danger'>

                                                <h3 className='text-end'>Ingeso total del dia</h3>
                                                <h3 className='text-end'>Q. 12500.00</h3>
                                                <button className='btn btn-success'>PDF</button>

                                            </div>


                                        </div>
                                    </div>
                                    <div className='col-md-7'>

                                        <div>
                                            <h1>Reporte de:</h1>
                                        </div>
                                        <div className='d-flex m-2'>
                                            <h3 className='m-2'>DE</h3>
                                            <input type="date" />

                                            <h3 className='m-2'>A</h3>
                                            <input type="date" />
                                        </div>

                                    </div>
                                    <div className='container-fluid '>
                                        <div className='col-md-12 justify-content-center'>

                                            <table className='table table-warning table-bordered  table-hover'>
                                                <thead className='table-dark'>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Factura</th>
                                                        <th>Cliente</th>
                                                        <th>Fecha</th>
                                                        <th>total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>11</td>
                                                        <td>3545353</td>
                                                        <td>Juan de las casas</td>
                                                        <td>12-02-22</td>
                                                        <td>1100</td>
                                                    </tr>
                                                    <tr>
                                                        <td>12</td>
                                                        <td>35333</td>
                                                        <td>Debora Delano</td>
                                                        <td>13-02-22</td>
                                                        <td>3000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>13</td>
                                                        <td>3545353</td>
                                                        <td>Jose Benito Camelo</td>
                                                        <td>25-02-22</td>
                                                        <td>2100</td>
                                                    </tr>
                                                </tbody>

                                            </table>
                                            <div className='d-flex'>
                                                <div className='p-2 w-100 bd-highlight'>
                                                    <button className='btn btn-success'>PDF</button>
                                                </div>
                                                <div className='p-2 flex-shrink-1 bd-highlight'>
                                                    <h5 className='text-end me-2'>Ingreso en el periodo: </h5>
                                                    <h5 className='text-end me-2'><b>Q. 6200.00</b> </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>


                    </div>


                </div>
            </div>

        </>
    )
}

export default report
