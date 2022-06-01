import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import { faArrowAltCircleRight, faCashRegister, faShoppingBag, faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "../../components/sidebar/sidebar";
import useAuth from "../../auth/useAuth";

export default function Home() {
    const auth = useAuth();

    return (
        <>


            {/* <Navbars brand="Menu Principal" /> */}
            <Sidebar brand="home" />
            <section className="home-section">
                <div className="home-content">

                    <div className="container-fluid">
                        <div>
                            <h1>welcome to {auth.user.name}</h1>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-primary shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1 text-center">
                                                    <h6><b>Clientes</b></h6></div><br />
                                                <div className="h3 mb-0 font-weight-bold text-secondary text-center">
                                                    <p>5</p>
                                                </div>
                                            </div>

                                            <div className="col-auto">
                                                <i className="fa-4x text-secondary"><FontAwesomeIcon icon={faUser} /></i>
                                            </div>
                                        </div>
                                    </div>

                                    <a href="/" className="text-center">Ver Clientes   <i className="fa fa-arrow-circle-right"><FontAwesomeIcon icon={faArrowAltCircleRight} /></i></a>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-success shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-1">
                                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1 text-center">
                                                    <h6><b>Productos</b></h6></div> <br />
                                                <div className="h3 mb-0 font-weight-bold text-secondary text-center">
                                                    <p>5</p>                                           </div>
                                            </div>

                                            <div className="col-auto">
                                                <i className="fa-4x text-secondary"><FontAwesomeIcon icon={faShoppingBag} /></i>
                                            </div>

                                        </div>
                                    </div>
                                    <a href="/" className="text-center text-success">Ver Productos  <i className="fa fa-arrow-circle-right"><FontAwesomeIcon icon={faArrowAltCircleRight} /></i></a>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-info shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-info text-uppercase mb-1 text-center">
                                                    <h6><b> Usuarios</b></h6></div> <br />
                                                <div className="h3 mb-0 font-weight-bold text-secondary text-center">
                                                    <p>5</p>                                         </div>
                                            </div>

                                            <div className="col-auto">
                                                <i className="fa-4x text-secondary"><FontAwesomeIcon icon={faUserPlus} /></i>
                                            </div>

                                        </div>
                                    </div>
                                    <a href="/" className="text-center text-info">Ver Usuarios  <i><FontAwesomeIcon icon={faArrowAltCircleRight} /></i></a>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-warning shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1 text-center">
                                                    <h6> <b>Ventas</b></h6></div><br />
                                                <div className="h3 mb-0 font-weight-bold text-secondary text-center">
                                                    <p>5</p>
                                                </div>
                                            </div>

                                            <div className="col-auto">
                                                <i className="fa-4x text-secondary"><FontAwesomeIcon icon={faCashRegister} /></i>
                                            </div>
                                        </div>
                                    </div>

                                    <a href="/" className="text-center text-warning">Ver Ventas <i className="fa fa-arrow-circle-right"><FontAwesomeIcon icon={faArrowAltCircleRight} /></i></a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

        </>

    )
}

