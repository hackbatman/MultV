import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react'
import { TYPES } from '../../Action/Actionventas';
import useAuth from '../../auth/useAuth';
import { VentaReducer, VentasInicialState } from '../../reducer/VentasReducer';
import Modal from '../../components/modal/modal';
import { useModal } from '../../components/modal/useModal';
import ProductsItem from '../Ventas/productsItem';
import VentasItem from '../Ventas/ventasItem';

const VentasAdd = () => {
    //Shoping Card
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);

    const url = "http://localhost:8800/inventario/producto";

    const [state, dispach] = useReducer(VentaReducer, VentasInicialState);
    const { products, ventas } = state;

    const auth = useAuth();
    const [ventasD, setVentasD] = useState([]);

    const changeProds = async () => {
        const respuesta = await axios.post(url + "/" + auth.sucursal.idSucursal);
        //console.log(respuesta.data);
        //setProd(respuesta.data);
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

   


    return (
        <div className='container'>
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
                    <select className='form-select' name="" id="">
                        <option>contado</option>
                        <option>Credito</option>
                    </select>
                </div>
            </div>

            <Modal brand="Productos" isOpen={isOpenModal1} closeModal={closeModal1}>
                <div>
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
                    <div className='border container bg-light'>
                        <div className='m-2'>

                            <h4>Subtotal</h4>
                            <p>Q. 5000.00</p>
                            <h4>Descuent</h4>
                            <p>Q. 100.00</p>
                            <h4>Total</h4>
                            <p>Q. 4900.00</p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default VentasAdd
