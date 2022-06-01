import Modal from '../../components/modal/modal';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useModal } from '../../components/modal/useModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faPaperPlane, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import useAuth from "../../auth/useAuth";


const Bodega = () => {
    const url = "http://localhost:8800/inventario/producto/bodega"
    const urlcategory = "http://localhost:8800/products/category"
    const urlDates = "http://localhost:8800/addNewProd"

    const auth = useAuth();

    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
    const [categoria, setCategoria] = useState([]);
    const [body, setBody] = useState([])
    const [prod, setProd] = useState([])
    const [productos, setProductos] = useState([])


    const DialogClose = () => {
        closeModal1(false);
    }

    const inputChange = ({ target }) => {
        let id = JSON.stringify(auth.sucursal.id)
        const { name, value } = target
        setBody({
            ...body,
            [name]: value, id_sucu: id
        })
    }

    const changeProds = async () => {
        const respuesta = await axios.get(url);
        setProd(respuesta.data);
        const categ = await axios.get(urlcategory);
        setCategoria(categ.data);
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

    const submit = (id) => {
        let idd = id;
        const datos = prod.find(elemento => idd == elemento.id)
        setProductos([datos])
        console.log("los datos", datos)
    }


    useEffect(() => {
        changeProds();

    }, [])




    return (
        <>


            <div className='card shadow mb-4'>
                <div className='card-heade m-5'>
                    <div className='section-lateral border'>

                        <div className='d-flex'>
                            <div className='p-2 w-100 bd-highlight'>
                                <h1>Bodega</h1>
                            </div>
                            <div className='p-2 flex-shrink-1 bd-highlight'>
                                <Link to="/">Ingrese menu</Link>

                            </div>
                        </div>


                    </div>
                    <div className='card-body row'>
                        <div className='border bg-light m-1'>
                            <div className='col-md-5 m-2 dflex' hidden>
                                <p>Agregar Nuevo producto en bodega</p>
                                <button >agregar categoria</button>
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

                                                        categoria.map(index => (
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
                                        <button className='btn btn-primary' onClick={() => onSubmit()}>Acepar</button>
                                        <button className='btn btn-success' onClick={DialogClose}>cancelar</button>
                                    </div>

                                </Modal>

                            </div>

                        </div>
                        <div className='card'>
                            <div className='row'>
                                <div className='col-md-7'>
                                    <div className='m-3 justify-content-center'>
                                        <h1 className='text-center'>productos en bodega</h1>
                                        <table className='table table-info table-resposive'>
                                            <thead >
                                                <th>Codigo</th>
                                                <th>Nombre</th>
                                                <th>stock</th>
                                                <th>precio Mayorista</th>
                                                <th>precio Venta</th>
                                                <th>accion</th>
                                            </thead>
                                            <tbody>
                                                {prod.map((producto, index) => (
                                                    <tr key={index}>
                                                        <td>{producto.codebar}</td>
                                                        <td>{producto.nombre}</td>
                                                        <td>{producto.stock}</td>
                                                        <td>{producto.precio_mayorista}</td>
                                                        <td>{producto.precio_venta}</td>
                                                        <td><button onClick={() => submit(producto.id)} className='btn btn-outline-danger'><span><FontAwesomeIcon icon={faPaperPlane} /> </span></button></td>
                                                    </tr>
                                                ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className='col-md-5'>
                                    <div className='card mt-2'>
                                        <div className='card-header'>
                                            <h3>Agregar producto a bodega</h3>


                                        </div>
                                        <div className='card-body'>
                                            <div>
                                                <select className='form-select' aria-label="size 3 select example" name="" id="">
                                                    <option selected>Seleccionar sucursal</option>
                                                    <option value="">sucursal 1</option>
                                                    <option value="">sucursal 2</option>
                                                </select>
                                            </div>
                                            
                                            {
                                            productos.map((produc, index) => (
                                                <ul>
                                                    
                                                    
                                                    <li key={index}><b>los productos seleccionados son:</b></li>
                                                    <li>codigo: <b>{produc.codebar}</b></li>
                                                    <li>producto: <b>{produc.nombre}</b></li>
                                                    <li>Detatalles: <b>{produc.Detalle}</b></li>
                                                    <li>precio: <b>{produc.precio_venta}</b></li>
                                                    <li>stock: <input className='col-md-3' type="text" /></li>
                                                    <br />
                                                    <div className='modal-footer'>
                                                    <li><button className='btn btn-outline-success'><span><FontAwesomeIcon icon={faPlusSquare} /> </span></button></li>
                                                    </div>
                                                </ul>
                                            ))
                                            }
                                                
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

export default Bodega
