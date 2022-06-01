import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './login.css';
import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import useAuth from "../../auth/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [body, setBody] = useState({ username: '', pass: '' })
    const navegar = useNavigate();
    const [error, setError] = useState(null)
    //const from = location.state?.from?.pathname || "/acces/sucursal";
    const from = "/acces/sucursal";
    const { setUser, setSucusal } = useAuth();
    const inputChange = ({ target }) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]: value
        })
    }
    const autenticarxd = () => {
        axios.post('http://localhost:8800/api/login', body)
            .then(({ data }) => {
                setUser({...data, roles:""});
                if(setSucusal==null)
                navegar('/acces/sucursal')
                else{
                navegar('/')
                }
            })
            
            .catch(({ response }) => {
                setError("Usuario y contraseña no existe");
                setTimeout(() => (setError(null)), 2000)

            })

    }


    return (
        <>
            <div className="imagenBackg">
                <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                    <div className="card p-4 text-light backg-dark mb-5">
                        <div className="card-header">
                            <h3 className="text-center">Iniciar sesión </h3>
                        </div>
                        {
                            error ? (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            ) : (null)
                        }

                        <div className="card-body w-100">
                            <div className="form">
                                <div className="input-group form-group mt-3">
                                    <div className="bg-second rounded-start">
                                        <span className="m-3"><FontAwesomeIcon icon={faUser} /></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Insert Username"
                                        value={body.username} onChange={inputChange} name="username" />
                                </div>
                                <div className="input-group form-group mt-3">
                                    <div className="bg-second rounded-start">
                                        <span className="m-3"><FontAwesomeIcon icon={faKey} /></span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="Insert Password"
                                        value={body.pass} onChange={inputChange} name="pass" />
                                </div>

                                <div className="form-group mt-3">

                                    <button className="btn btn-success bg-second float-end text-white w-100" onClick={() => autenticarxd()}>Sign In</button>

                                </div>
                            </div>

                        </div>


                    </div>
                </div>


            </div>



        </>

    )
}
export default Login
