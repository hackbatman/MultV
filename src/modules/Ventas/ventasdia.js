import axios from 'axios';
import React, { useState } from 'react'
import Modal from '../../components/modal/modal';
import { useModal } from '../../components/modal/useModal';
const data = [
  {
    id: "9788466301244",
    costo: "120.00 $usd",
    desc: "Producto 1",
  },
  {
    id: "6970392255002",
    costo: "10.00 $usd",
    desc: "Producto 2"
  }, {
    id: "7896090082087",
    costo: "2.00 $usd",
    desc: "Producto 3"
  }, {
    id: "8690828630507",
    costo: "1.00 $usd",
    desc: "Producto 4"
  }
  , {
    id: "8993286421978",
    costo: ".70 $usd",
    desc: "Producto 5"
  }
  , {
    id: "6921345898333",
    costo: ".30 $usd",
    desc: "Producto 6"
  }, {
    id: "7401007600423",
    costo: ".30 $usd",
    desc: "Producto gerson gei"

  }
];


const Ventasdia = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [id, setId] = useState("");
  const [message, setMessage] = useState("Escanea el producto");
  const [body, setBody] = useState([]);
  const urlDates = "http://localhost:8800/add/category";

  
  function search(e) {
    const result = data.find((i) => i.id === id);
    if (result) {
      setMessage(`${result.desc} <=> ${result.costo}`);
      e.target.select();
    } else {
      setMessage(id === "" ? "Escanea el producto" : "No existe");
    }
  }
  const inputChange = ({ target }) => {

    const { name, value } = target
    setBody({
      ...body,
      [name]: value
    })
  }



 
  const onSubmit = async () => {
    try {
        await axios.post(urlDates, body);
        
    } catch (error) {
        window.alert(error)
    }
}
  return (
    <>
      <div className='container'>
        <div className='container'>
          <button className='btn btn-primary' onClick={openModal1}>mostrar modal</button>
          <button className='btn btn-primary' onClick={openModal2}>mostrar modal2</button>

          <div className="app">
            <div>
              <h1>Consulta el Precio</h1>
            </div>
            <input
              type="text"
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              onKeyUp={search}
              autocomplete="off"
              autofocus="on"
            />
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

          <div className='container m-2'>
            <div className='form-control'>
              <div className="row  d-flex">
                <div className="col-md-2">
                  <label>Categoria</label>
                  <div className="input-group">
                    <input type="text" className="form-control" name='categoria' value={body.categoria} onChange={inputChange} />
                  </div>
                  <button className='btn btn-primary' onClick={onSubmit}>agregar</button>
                </div>
              </div>


            </div>


          </div>


          <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
            <div className='modal-title'>
              <h3>hola titulo</h3>
            </div>
            <div className='modal-body'>
              <input type="text" className='form-label' placeholder='ingrese texto' />
              <input type="text" className='label-text' placeholder='ingrese text2' />
              <input type="text" className='label-text' placeholder='ingrese texto3' />
            </div>
            <div className='modal-footer'>
              <button className='btn btn-primary'>aceptar</button>
            </div>
          </Modal>
          <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
            <div>
              <h1>
                hola modal 2
              </h1>
            </div>
          </Modal>

        </div>
      </div >
    </>
  )
}

export default Ventasdia
