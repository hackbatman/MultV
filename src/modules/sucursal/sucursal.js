import { useEffect, useState } from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import './sucursal.css';
import axios from 'axios';
import useAuth from "../../auth/useAuth";
import { useNavigate } from "react-router-dom";



const Sucursal = () => {

    const [sucur, setSucur] = useState([]);
    const auth = useAuth();
    const from = "/";
    const navigate = useNavigate();

    const { setUser, setSucursal, setRoles } = useAuth();
    const url = 'http://localhost:8800/sucursal/venta';
    const url1 = 'http://localhost:8800/getAdmin';
    const fetchId = async () => {

        await axios.post(url + "/" + auth.user.id)
            .then(({ data }) => {

                setSucur(data);
                console.log(" los datos de setSucur son", data);
            })

            .catch(({ response }) => {
                console.log(response)
            })


    }
    const GetRol = async () => {
        await axios.get(url1 + "/" + auth.user.rol)
            .then(({ data }) => {
                let idd = auth.user.rol;
                const rol = data.find((i) => i.id === idd)


                setRoles(rol);
                console.log(" los datos de rol son", data);
            })

            .catch(({ response }) => {
                console.log(response)
            })

    }



    const guardarV = (idve) => {
        let idd = idve;
        const idv = sucur.find((i) => i.id === idd)
        setSucursal(idv)
        navigate(from)
        console.log("los datos de body son", idv)
    }





    useEffect(() => {
        fetchId();
        GetRol();
    }, [])




    return (
        <div className="main-center">
            <div className="container">
                <div className="p-2 text-center">
                    <h1 className="hs">Bienvenido {auth.user.name} </h1>
                    <h3 className="hs">Elige el sucursal</h3>
                </div>
                <div className="row ">
                    <div className="d-flex justify-content-center">

                        {sucur.map((item, index) => (
                            <div key={index} className="m-5" >
                                <div className="card card-color" style={{ width: "14rem" }}>
                                    <div className="card-title">
                                        <p hidden>{item.id}</p>
                                        <h4 className="text-center hs">{item.nombre}
                                        </h4>

                                    </div>
                                    <div className="card-body">
                                        <img className="card-img-top" style={{ width: "100%", height: "150px" }} src={item.images} alt="" />

                                        <p className="card-title text-center hs">{item.direccion}</p>
                                        <div className="d-flex justify-content-center">
                                            
                                            <button onClick={() => guardarV(item.id)} className="btn btn-success">Elegir :3</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Sucursal
