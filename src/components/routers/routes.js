import Ventas from '../../modules/Ventas/ventas'
import Inventory from '../../modules/inventory/inventory'
import Home from '../../modules/home/home'
import Sucursal from '../../modules/sucursal/sucursal'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Report from '../../modules/Report/report'
import Login from '../../modules/login/Login';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoutes';
import Ventasdia from '../../modules/Ventas/ventasdia';
import Cliente from '../../modules/client/cliente';
import VentaServicio from '../../modules/Ventas/ventasServicio';
import VentaCredito from '../../modules/Ventas/ventaCredito';
import Config from '../../modules/setting/config';
import Bodega from '../../modules/setting/bodega';


export default function Rutas() {
  return (


    <BrowserRouter>
      <Routes>
        {/* Rutas privadas, necesita de una autenticacion */}
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Home />} />
          <Route path='/ventas' element={<Ventas />} />
          <Route path='/reporte' element={<Report />} />
          <Route path='/inventario' element={<Inventory />} />
          <Route path='/acces/sucursal' element={<Sucursal />} />
          <Route path='/cliente' element={<Cliente />} />
        </Route>
        {/* Rutas Publicas, no necesita de una autenticacion */}
        <Route element={<PublicRoute />}>
          <Route path='/login' element={<Login />} />
         </Route>
         <Route path='*' element={<div><div className="Container m-5 bg-primary">
           <h1>No existe la pagina donde intentas acceder</h1><br /><h1>Bañate otaku culiao</h1>
           </div>
         <br />
         <div className='container link-warning'><Link  to="/">regresar a menu</Link></div>
         </div>} />
         <Route path='/ventasdia' element={<Ventasdia />} />
         <Route path='/venta/service' element={<VentaServicio />} />
         <Route path='/venta/credit' element={<VentaCredito />} />
         <Route path='/config' element={<Config />} />
         <Route path='/bodega' element={<Bodega />} />
         
         
      </Routes>
      
    </BrowserRouter>

  )
}


