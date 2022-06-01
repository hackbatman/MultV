import { faMinus, faPlus, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'

const VentasItem = ({ data, deleteFromVentas, addToVentas }) => {
    


    let { id, nombre, precio_venta, cant } = data;


    return (

        <div className='border'>
            <div className='d-flex'>
                <div className='flex-grow-1'>
                    <li>{cant}</li>
                </div>
                <div className='justify-content-end'>
                    <button className='btn btn-outline-danger' onClick={() => deleteFromVentas(id, true)}>
                        <span><FontAwesomeIcon icon={faTrashAlt} /></span>
                    </button>

                </div>

            </div>
            <li><b>{nombre}</b></li>
            <li>Q.{precio_venta}.00</li>

            
            <button className='btn btn-outline-warning' onClick={() => addToVentas(id)}><span><FontAwesomeIcon icon={faPlus} /></span></button>
            <button className='btn btn-outline-info' onClick={() => deleteFromVentas(id)}><span><FontAwesomeIcon icon={faMinus} /></span></button>

        </div>

    )
}

export default VentasItem
