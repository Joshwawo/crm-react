import { useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import IniciarSesion from "./layout/IniciarSesion";
import Layout from "./layout/Layout";

import EditarCliente from "./pages/EditarCliente";
import VerCliente from "./pages/VerCliente";
import Inicio from "./pages/Inicio";
import NuevoCliente from "./pages/NuevoCliente";
import Error404 from "./pages/Error404";

function App() {
  console.log(import.meta.env)
  
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
         
      
          <Route path="/clientes" element={<Layout/>} >
            <Route index element={<Inicio/>}/>
            <Route path="nuevo" element={<NuevoCliente/>}/>
            <Route path="editar/:id" element={<EditarCliente/>}/>
            <Route path=":id" element={<VerCliente/>}/>
            
      
          </Route>
          <Route path="/*" element={<Error404/>} /> 
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
