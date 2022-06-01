
import React, { useReducer, useEffect, useState, useRef } from 'react'
import './ventas.css';
import Sidebar from '../../components/sidebar/sidebar';
import { faExternalLinkSquareAlt, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '../../components/modal/modal';
import { useModal } from '../../components/modal/useModal';
import axios from 'axios';
import useAuth from '../../auth/useAuth';
import ProductsItem from '../Ventas/productsItem';
import VentasItem from '../Ventas/ventasItem';
import { VentaReducer, VentasInicialState } from '../../reducer/VentasReducer';
import { TYPES } from '../../Action/Actionventas';



export default function Ventas() {

    const auth = useAuth();
    const { setSucursal } = useAuth();
    var date = new Date();
    const dateoptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    var dt = date.toLocaleDateString('es-mx', dateoptions);
    const [body, setBody] = useState([])
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
    const [isOpenModal2, openModal2, closeModal2] = useModal(false);
    const url = "http://localhost:8800/inventario/producto"
    const [prod, setProd] = useState([]);
    const [productos, setProductos] = useState([]);


    const initialState = {
        id_venta: "", id_producto: " ", id_cliente: " ", cantidad: "", total: " ", id_factuta: ""
    }

    const inputChange = ({ target }) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]: value
        })
        console.log(body)

    }
    const fetchId = async () => {

        try {

            const respuesta = await axios.post(url + "/" + auth.user.id);
            setProd(respuesta.data);


        } catch (error) {
            console.log(error)
        }


    }
    // const VerDatos = () => {
    //     console.log("this is a ID Body", body.id)
    //     let idd = JSON.parse(body.id)
    //     const detail = prod.filter((i) => i.id === idd)
    //     setProductos([...productos, detail])

    //     console.log("this is a Detail with ID", productos)





    // }
    useEffect(() => {
        fetchId();
    }, [])
    //Shoping Card
    const [isOpenModal3, openModal3, closeModal3] = useModal(false);

    const url3 = "http://localhost:8800/inventario/producto";

    const [state, dispach] = useReducer(VentaReducer, VentasInicialState);
    const { products, ventas } = state;
    const [isChecked, setIsChecked] = useState(false);

    // id_producto: "", id_cliente: "", detalle: "", cantidad: "", total: ""
    const [ventasD, setVentasD] = useState({ id_producto: "", id_cliente: "", detalle: "", cantidad: "", total: "" });

    const changeProds = async () => {
        const respuesta = await axios.post(url + "/" + auth.sucursal.id);

        dispach({ type: TYPES.READ_ALL_DATA, payload: respuesta.data })

    }
    useEffect(() => {
        changeProds();
    }, [])

    const addToVentas = (id) => {
        console.log(id);
        dispach({ type: TYPES.ADD_TO_VENTAS, payload: id });
    };
    const deleteFromVentas = (id, all = false) => {
        if (all) {
            dispach({ type: TYPES.REMOVE_ALL_FROM_VENTAS, payload: id })
        } else {
            dispach({ type: TYPES.REMOVE_ONE_FROM_VENTAS, payload: id })
        }
    }

    const verDatos = () => {
        state.ventas.find((index) => {
            if (isChecked == false) {
                setVentasD({ id_cliente: 1, id_producto: index.id, total: totalPrecio })
            }
            else {
                setVentasD({ id_cliente: null, id_producto: index.id, total: totalPrecio })
            }

        }
        )
        console.log("this is a dates in the ventasD for ventas", ventasD)


    }
    useEffect(() => {
        verDatos();
    }, [ventas])
    // useEffect(() => {
    //     verDatos();
    // }, [])

    const totalPrecio = ventas.reduce((precio_venta, item) => precio_venta + item.cant * item.precio_venta, 0);
    const totalDescuento = ventas.reduce((descuento, item) => descuento + item.descuento, 0)


    const handleOnChange = () => {
        setIsChecked(!isChecked);
        if (isChecked == false) {
            //setVentasD({ id_cliente: 1 })
            console.log("this is a false")
        } else
            // setVentasD([])
            console.log("this is a true")

    };
    const dispareEv = (e) => {
        e.preventDefault();

    }
    const DialogClose=()=>{
        closeModal2(false);
    }
    const onSubmit = async () => {
        DialogClose();
    }





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
                                <div className='card-section  d-flex'>
                                    <h2 className="m-2 font-weight-bold p-2 w-100 bd-highlight">Nueva Venta</h2>
                                    <div className="p-2 flex-shrink-1 bd-highlight">
                                        <p className='text-end'>{dt}</p>
                                    </div>
                                </div>
                            </div>
                            {/* <Navbar/> */}
                            <div className="card-body">
                                <form className="form-horizontal " onSubmit={dispareEv}>
                                    <div className="row m-2">
                                        <div className='col-md-7'>
                                            <div className='text-end'>
                                                <h5>Datos de cliente</h5>
                                            </div>
                                        </div>
                                        <div className='col-md-5'>
                                            <div className='input-group justify-content-end'>
                                                {isChecked ? (
                                                    <button disabled className='btn btn-outline-primary'>nuevo cliente</button>
                                                ) : (
                                                    <button className='btn btn-outline-primary' onClick={openModal2}>nuevo cliente</button>
                                                )}
                                            </div>
                                            <Modal brand="Crear Nuevo Cliente" isOpen={isOpenModal2} closeModal={closeModal2}>
                                                <div className='form-control'>
                                                    <div className='mb-3'>
                                                        <label className='form-label'>nombre</label>
                                                        <input className='form-control' type="text" name="" id="" />
                                                    </div>
                                                    <div className='mb-3'>
                                                        <label className='form-label'>DPI/NIT</label>
                                                        <input className='form-control' type="text" name="" id="" />
                                                    </div>
                                                    <div className='mb-3'>
                                                        <label className='form-label'>Direccion</label>
                                                        <input className='form-control' type="text" name="" id="" />
                                                    </div>
                                                    <div className='modal-footer'>
                                            <button className='btn btn-primary' onClick={()=> onSubmit()}>Acepar</button>
                                            <button className='btn btn-success'onClick={DialogClose}>cancelar</button>
                                        </div>

                                                </div>
                                            </Modal>
                                        </div>


                                        <div className='m-2 justify-content-center'>

                                            <label>CF</label>
                                            <input
                                                checked={isChecked}
                                                onChange={handleOnChange}

                                                className='form-input ' type="checkbox" name="stateCliente" />

                                        </div>

                                        <div className="col-md-3">
                                            <label>Cliente:</label>

                                            <div className="input-group">
                                                {isChecked ? (
                                                    <input type="text" disabled name='cliente' value="CF" className="form-control" onChange={inputChange} />
                                                ) : (

                                                    <input type="text" name='cliente' className="form-control" value={body.cliente} onChange={inputChange} />
                                                )}
                                                <span className="input-group-btn">
                                                    {isChecked ? (
                                                        <button className="btn btn-secondary" disabled type="button"><span><FontAwesomeIcon icon={faSearch} /></span></button>
                                                    ) : (
                                                        <button className="btn btn-primary" type="button"><span><FontAwesomeIcon icon={faSearch} /></span></button>
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <label>NIT:</label>
                                            <div className="input-group">
                                                {isChecked ? (
                                                    <input type="text" disabled name='nit' value="CF" className="form-control" onChange={inputChange} />
                                                ) : (
                                                    <input type="text" name='nit' className="form-control" value={body.nit} onChange={inputChange} />
                                                )}

                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <label>Direccion:</label>
                                            <div className="input-group">
                                                {isChecked ? (
                                                    <input type="text" disabled name='direccion' value="CF" className="form-control" onChange={inputChange} />
                                                ) : (
                                                    <input type="text" name='direccion' className="form-control" value={body.direccion} onChange={inputChange} />
                                                )}
                                            </div>
                                        </div>


                                    </div>
                                </form>
                                <div className='row'>
                                    <div className="col-md-5">
                                        <label>Ingrese dato buscar:</label>
                                        <div className="input-group">
                                            <input type="text" name='id' className="form-control" value={body.id} onChange={inputChange} />
                                            <button className='btn btn-success' >search</button>
                                        </div>
                                    </div>


                                </div>
                                {/* to insert ventasadd in ventas (Generalizated) */}


                                <div className='row'>
                                    <div className="col-md-7">
                                        <label >Producto:</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" name='id' placeholder="Codigo del Producto o nombre" />
                                            <span className="input-group-btn">
                                                <button className="btn btn-danger" type="button" onClick={addToVentas}><span><FontAwesomeIcon icon={faSearch} /></span></button>
                                                <button className="btn btn-primary" type="button" onClick={openModal1} ><span><FontAwesomeIcon icon={faPlus} /></span></button>
                                            </span>
                                        </div>

                                    </div>

                                    <div className='col-md-5'>
                                        <label>Forma de pago</label>
                                        {isChecked ? (

                                            <select disabled className='form-select' name="" id="">
                                                <option> CF contado</option>

                                            </select>
                                        ) : (
                                            <select className='form-select' name="" id="">
                                                <option>contado</option>
                                                <option>Credito</option>
                                            </select>

                                        )}
                                    </div>
                                </div>

                                <Modal brand="Productos" isOpen={isOpenModal1} closeModal={closeModal1}>
                                    <div className='row'>
                                        {products.map((product) => (<ProductsItem key={product.id} data={product} addToVentas={addToVentas} />))
                                        }

                                    </div>
                                </Modal>

                                <h3 className='mt-3 text-center'>Ventas Generadas</h3>
                                <div className='row'>
                                    <div className='col-md-8'>
                                        {
                                            ventas.map((item, index) => <VentasItem key={index} data={item} addToVentas={addToVentas} deleteFromVentas={deleteFromVentas} />)

                                        }
                                    </div>
                                    <div className='col-md-4'>
                                        <div className=' border bg-light'>
                                            <div className='m-3'>

                                                <h4>Subtotal</h4>
                                                <p>Q. {totalPrecio}</p>
                                                <h4>Descuent</h4>
                                                <p>Q. {totalDescuento}</p>
                                                <h4>Total</h4>
                                                <p><b> Q {totalPrecio - totalDescuento}</b></p>

                                            </div>

                                        </div>
                                    </div>


                                </div>
                                <div className='card-footer d-flex justify-content-end'>
                                    <button className='btn btn-outline-primary'>Cobrar</button>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </section>




        </>
    )
}
