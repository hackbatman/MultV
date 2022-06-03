import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useAuth from '../../auth/useAuth';
import Sidebar from '../../components/sidebar/sidebar'

const Cliente = () => {
    const url = "http://localhost:8800/cliente"
    const url_cliente = "http://localhost:8800/deudas/clientes"
    const url_deudas = "http://localhost:8800/credito"
    const urlDatos = "http://localhost:8800/add/abono"

    const auth = useAuth();
    const { setSucursal } = useAuth();
    const [cliente, setCliente] = useState([]);
    const [elementos, setElementos] = useState([]);
    const [dUltimo, setDultimo] = useState([]);
    const [deudas, setDeudas] = useState([]);
    const [body, setBody] = useState([])


    var date = new Date();
    const dateoptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    var dt = date.toLocaleDateString('CST', dateoptions);

    const inputChange = ({ target }) => {
        
        const { name, value } = target
        setBody({
            ...body,
            [name]: value
        })
        console.log("this is a inputcapture dates ", body)
    }

    const changeClient = async () => {
        try {
            const respuesta = await axios.get(url)
            setCliente(respuesta.data);

        } catch (error) {

        }
    }
    const onSubmit = async () => {
        
        try {
            await axios.post(urlDatos, body);
           
            
        } catch (error) {
            console.log(error)
        }
      
    }



    const selectedCliente = async (id) => {
        try {
            let user=auth.user.id
            let idcliente = id
            const detail = await axios.get(url_cliente + "/" + idcliente)
            const elementos = await axios.get(url_deudas + "/" + idcliente)
            setDeudas(elementos.data);
            //console.log("las deudas de los clientes son: ", deudas)
            //const detail = cliente.filter((element => element.id_cliente == id))
            const datosCliente = detail.data;
            const ultimo = datosCliente.pop((element => element.MontoInicial))
            //insertar los datos del cliente
            setBody({...body,idCliente:idcliente, idUser: user,fechaAbono:dt, MontoInicial:ultimo.MontoInicial })
            setElementos(detail.data)
         
        } catch (error) {

        }


    }



    useEffect(() => {

        changeClient();

    }, [])

    return (
        <>
            <Sidebar brand="Client" />
            <section className="home-section">
                <div className="home-content">
                    <div className='container'>
                        <div className="card shadow mb-4">
                            <div className="card-header">
                                <div className='section-lateral d-flex'>
                                    <h2 className="m-2 font-weight-bold p-2 w-100 bd-highlight">Lista de clientes Deudores</h2>
                                    <div className="p-2 flex-shrink-1 bd-highlight">
                                        <p className='text-end'>{dt}</p>
                                    </div>

                                </div>
                            </div>
                            <div className='card-body'>

                                <div className='row'>
                                    <div className='col-md-8'>
                                        <h3>Deudores</h3>
                                        <div className='card m-2'>
                                            <table className='table table-hover'>
                                                <thead>
                                                    <tr>
                                                        <th>id</th>
                                                        <th>Nombre</th>
                                                        <th>Apellido</th>
                                                        <th>NIT/DPI</th>
                                                        <th>Direccion</th> 
                                                        <th>Estado</th>

                                                    </tr>

                                                </thead>

                                                <tbody>
                                                    {
                                                        cliente.map((clientes, index) => (
                                                            <tr onClick={() => selectedCliente(clientes.id_cliente)} key={index}>
                                                                <td>{clientes.id_cliente}</td>
                                                                <td>{clientes.Nombre}</td>
                                                                <td>{clientes.Apellido}</td>
                                                                <td>{clientes.NIT}</td>
                                                                <td>{clientes.direccion}</td>
                                                                <td className='badge bg-danger  justify-content-center'   >
                                                                    pagado
                                                                </td>
                                                            </tr>

                                                        ))
                                                    }

                                                </tbody>

                                            </table>
                                        </div>

                                    </div>
                                    <div className='col-md-4'>
                                        <div className='card'>
                                            {/* <p className='badge rounded-pill bg-warning text-dark'>Click on colname for detail client</p> */}
                                            <div className='card-body'>
                                                <div>
                                                    <h3>Detalles de credito</h3>
                                                    <div className='d-flex col justify-content-start '>
                                                        {
                                                            elementos.map((clientes, index) => (
                                                                <div key={index} className='row'>
                                                                   <li className='d-flex justify-content-between'><b>Nombre:</b>{clientes.Nombre}<b>Deuda:</b>{dUltimo.MontoInicial}
                                                                     </li>
                                                                    <p>
                                                                    <b>Detail:</b>{clientes.detalle}
                                                                    </p>
                                                                    
                                                                </div>
                                                            ))}
                                                    </div>

                                                    <p><b>historial de pago:</b>
                                                        {
                                                            deudas.map((elementos, index) => (
                                                                <li key={index} ><b>abono:</b>{elementos.fechaAbono} Q.{elementos.MontoInicial} </li>
                                                            ))
                                                        }
                                                    </p>

                                                    <p><b>Nuevo Abono:</b><input className='form-control' name='montoPagar' onChange={inputChange}  type="text" /><button className='btn btn-outline-dark' onClick={onSubmit} >pagar</button></p>



                                                </div>


                                            </div>
                                        </div>
                                    </div>


                                </div>


                            </div>
                        </div>


                    </div>



                </div>
            </section>
        </>
    )
}

export default Cliente
