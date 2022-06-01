import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar/sidebar'
import './inventory.css'
import { faCartPlus, faCut, faEdit, faEye, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.css'
import Modal from '../../components/modal/modal';
import axios from 'axios';
import useAuth from "../../auth/useAuth";
import { useModal } from '../../components/modal/useModal';

function Inventory() {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
    const [isOpenModal2, openModal2, closeModal2] = useModal(false);

    const url = "http://localhost:8800/inventario/producto"
    const urlDates = "http://localhost:8800/addNewProd"
    const urlcategory = "http://localhost:8800/products/category"
    const urlcat = "http://localhost:8800/add/category";
    const [prod, setProd] = useState([])
    const [categoria, setCategoria] = useState([])
    const [id, setId] = useState("");
    const [message, setMessage] = useState("Escanea el producto");
    const auth = useAuth();
    const [prodm, setProdm] = useState([])
    const inicialState={ codebar: "", idCategoria:"", nombre: "", descripcion: "", stock: "", precio_compra: "", precio_venta: "", descuento: "", id_sucu: "" }
    const [body, setBody] = useState([])
    const [dataCat, setDataCat]=useState([])




    const changeProds = async () => {
        const respuesta = await axios.post(url + "/" + auth.sucursal.id);
        const categ = await axios.get(urlcategory);
        console.log(respuesta.data);
        setProd(respuesta.data);
        setCategoria(categ.data);

    }
    const inputChange = ({ target }) => {
        let id = JSON.stringify(auth.sucursal.id)
        const { name, value } = target
        setBody({
            ...body,
            [name]: value, id_sucu: id
        })
    }

    const onSubmit = async () => {
        try {
            await axios.post(urlDates, body);
           setBody("")
           DialogClose();
            
        } catch (error) {
            console.log(error)
        }
    }

    const onSubmitTest = async() => {
        try {
         
            categoria.forEach(element=>{
                
                console.log("los datos de categoria son: ", categoria)
               axios.post(urlcat,element );

            })
            
            
        } catch (error) {
            console.log(error)
        }
    }





    useEffect(() => {
        changeProds();

    }, [])

    const Dialog = () => {
        openModal2(true)
    }

    const DialogClose=()=>{
        closeModal1(false);
    }


    const dispareEv = (e) => {
        e.preventDefault();

    }
    function search(e) {
        const result = prod.find((i) => i.codebar === id);
        if (result) {
            setMessage(`${result.nombre} <=> ${result.precio_venta}`);
            e.target.select();
        } else {
            setMessage(id === "" ? "Escanea el producto" : "No existe");
        }
        console.log("los resultados son", prod.id)


    }
    function addnewProd(e) {
        const variable = e;
        console.log(variable)
    }


    const AddDetall = (id) => {
        let idd = id
        const detail = prod.filter((i) => i.id === idd)
        setProdm(detail)
        Dialog()
        console.log("this is a iD", detail)
        console.log("this is a caTEGORIA", categoria)
        

    }

    return (
        <>

            <Sidebar brand="inventory" />
            <section className="home-section">
                <div className="home-content">
                    <div className="container-fluid">
                        <div className="card shadow mb-4">
                            <div className="card-header">
                                <div className=' section-lateral d-flex'>
                                    {/* <button onClick={()=>onSubmitTest()} >agregar categoria</button> */}
                                    <div className='btn-add'>
                                        <button onClick={openModal1} className='btn btn-outline-success' title='Add New Product'  ><span><FontAwesomeIcon icon={faCartPlus} /> </span></button>
                                    </div>
                                    <Modal brand="Insertar Nuevo producto" isOpen={isOpenModal1} closeModal={closeModal1}>
                                        <form className='form-control'>
                                            <div className="row m-2">
                                                <div className="col-md-6">
                                                    <label>CodeBar</label>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" name='codebar' onChange={inputChange} value={body.codebar} />
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <label>Categoria</label>
                                                    <select className='form-select' name="idCategoria" onChange={inputChange}>
                                                    <option value="">Seleccionar categoria</option>
                                                       {
                                                           
                                                           categoria.map(index=>(
                                                            <option key={index.id} value={index.id}>{index.nomCategoria}</option>
                                                           ))
                                                       }
                                                    </select>
                                                </div>
                                                <div className="col-md-12">
                                                    <label>nombre</label>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" name='nombre' onChange={inputChange} value={body.nombre} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row m-2">
                                                <div className="col-md-12">
                                                    <label>descripcion</label>
                                                    <div className="input-group">
                                                        <textarea type="text" className="form-control" name='descripcion' onChange={inputChange} value={body.descripcion} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row m-2">
                                                <div className="col-md-3">
                                                    <label>Stock</label>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" name='stock' onChange={inputChange} value={body.stock} />
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <label>Precio Compra</label>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" name='precio_compra' onChange={inputChange} value={body.precio_compra} />
                                                    </div>
                                                </div>

                                                <div className="col-md-3">
                                                    <label>Precio Venta</label>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" name='precio_venta' onChange={inputChange} value={body.precio_venta} />
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <label>Descuento</label>
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" name='descuento' onChange={inputChange} value={body.descuento} />
                                                    </div>
                                                </div>
                                            </div>

                                        </form>
                                        <div className='modal-footer'>
                                            <button className='btn btn-primary' onClick={()=> onSubmit()}>Acepar</button>
                                            <button className='btn btn-success'onClick={DialogClose}>cancelar</button>
                                        </div>

                                    </Modal>
                                    <div className="search-box">
                                        <input type="text" placeholder="Buscar Producto"
                                            name="id"
                                            value={id}
                                            onChange={(e) => setId(e.target.value)}
                                            onKeyUp={search}
                                        // autocomplete="off"
                                        // autofocus="on" 
                                        />
                                        <i className='bx-search' ><FontAwesomeIcon icon={faSearch} /></i>
                                        <code
                                            className={
                                                message === "Escanea el producto"
                                                    ? null
                                                    : message === "No existe"
                                                        ? "rojo"
                                                        : "verde"
                                            }
                                        >
                                            {message}
                                        </code>
                                    </div>

                                </div>
                            </div>
                            <div className="card-body">
                                <form className="form-horizontal" onSubmit={dispareEv}>

                                    <div className="table-responsive mt-5">
                                        <h5 className="text-center">Detalle De Productos</h5>
                                        <table className="table table-success  table-hover" >
                                            <thead>
                                                <tr>
                                                    <th scope="col">Codigo</th>
                                                    <th scope="col">Producto</th>
                                                    <th scope="col">Stock</th>
                                                    <th scope="col">Precio Compra</th>
                                                    <th scope="col">Precio Venta</th>
                                                    <th scope="col">Descuento</th>
                                                    <th scope="col">Accion</th>
                                                </tr>
                                            </thead>
                                            <tbody className='table-info border-primary'>
                                                {prod.map((producto, index) => (
                                                    <tr key={index}>
                                                        <td>{producto.codebar}</td>
                                                        <td>{producto.nombre}</td>
                                                        <td>{producto.stock}</td>
                                                        <td>{producto.precio_compra}</td>
                                                        <td>{producto.precio_venta}</td>
                                                        <td>{producto.descuento}</td>
                                                        <td scope="row align-middle">
                                                            {

                                                                auth.roles.nombre === "Administrador" ? (
                                                                    <button title='ver' className='btn btn-danger btn-sm' onClick={() => AddDetall(producto.id)}><FontAwesomeIcon icon={faEye} /></button>
                                                                ) : (

                                                                    <button title='ver' className='btn btn-danger btn-sm' onClick={() => { AddDetall(producto.id) }} ><FontAwesomeIcon icon={faEye} /></button>
                                                                )
                                                            }
                                                            {

                                                                auth.roles.nombre === "Administrador" ? (
                                                                    <button title='Actualizar' className='btn btn-primary btn-sm'><FontAwesomeIcon icon={faEdit} /></button>
                                                                ) : (

                                                                    <button hidden ></button>
                                                                )
                                                            }
                                                            {

                                                                auth.roles.nombre === "Administrador" ? (
                                                                    <button title='Eliminar' className='btn btn-danger btn-sm'><FontAwesomeIcon icon={faCut} /></button>
                                                                ) : (

                                                                    <button hidden></button>
                                                                )
                                                            }
                                                        </td>
                                                    </tr>
                                                ))
                                                }
                                            </tbody>
                                        </table>

                                        <Modal brand="Ver detalles de producto" isOpen={isOpenModal2} closeModal={closeModal2}>
                                            {prodm.map((prouct, index) => (
                                                <ol className="text-center" key={index}>
                                                    <li><b>Codigo:</b>{prouct.codebar}</li>
                                                    <li><b>Nombre:</b>{prouct.nombre}</li>
                                                    <li><b>Descripcion:</b> {prouct.descripcion}</li>
                                                    <li><b>Stock: </b>{prouct.stock}</li>
                                                    <li><b>Precio Venta:</b> {prouct.precio_venta}</li>
                                                </ol>


                                            ))
                                            }
                                        </Modal>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </section>





        </>
    )
}

export default Inventory
