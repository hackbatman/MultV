import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Ventas from "./ventas";

const ProductsItem = ({ data, addToVentas }) => {
    const [body, setBody] = useState([])
    const inputChange = ({ target }) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]: value
        })

    }
   
    let { id, nombre, descripcion, precio_venta } = data;
    return <div className="container">
        <div className="row">
            <table className="table table-success  table-hover">
                <tbody className='table-info border-primary' >
                    <td scope="row align-middle">{nombre}</td>
                    <td scope="row align-middle">{descripcion}</td>
                    <td>Q. {precio_venta}.00</td>
                    <td scope="row align-middle" ><button className="btn btn-primary" onClick={() => addToVentas(id)}><span><FontAwesomeIcon icon={faPlus} /></span></button></td>
                </tbody>

            </table>

        </div>
    </div>;

}

export default ProductsItem

