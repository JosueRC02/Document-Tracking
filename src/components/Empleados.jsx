import {MdOutlineMapsHomeWork} from "react-icons/md";
import Tippy from "@tippyjs/react";
import Sidebar from "./Sidebar";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Apiurl} from '../services/ApiRest';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';

import 'tippy.js/dist/tippy.css';
import '../assets/css/depa.css';

export default function Empleados(){
  
  const[state,setState] = useState()
  const [list, setList] = useState([]);


  const abrirModal=()=>{
    if(state === false){
      setState(!state);
    }else{
      setState(!state);
    }
    
  }
  useEffect(() => {
    axios({
      url: `${Apiurl}/empleado`,
    })
      .then((response) => {
        setList(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const ListaEmpleados = Object.values(list).map(item=>{
    return(
        <>
        <tr>
          <td>{item.codigo_empleado}</td>
          <td>{item.nombre_empleado}</td>
          <td>{item.primer_apellido_empleado}</td>
          <td>{item.segundo_apellido_empleado}</td>
          <td>{item.fec_nac_empleado}</td>
          <td>{item.nacionalidad_empleado}</td>
          <td>{item.direccion_empleado}</td>
          <td>{item.correo_empleado}</td>
          <td>{item.telefono_empleado}</td>
          <td>{item.fec_ingreso_empleado}</td>
          <td>{item.puesto_empleado}</td>
          <td>{item.nombre_departamento}</td>
          <td>
              <Tippy content="Empleados">
                <button type="button" className="btn btn-info" id="botonD">
                <MdOutlineMapsHomeWork size="23px"/>
                </button>
              </Tippy>
          </td>
        </tr>
        </>
    )
  })

  const modalStyles={
    position: "absolute",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }

  return (
<div className="flex">
      <Sidebar/>
      <div className="h-screen flex-1 p-7" id="hp">
        <div className="contenedor" id="contenedor">
          <div className="table-wrapper">
              <div className="table-title">
                  <div className="row">
                      <div className="col-sm-8"><h2>Lista <b>Departamentos</b></h2></div>
                      <div className="col-sm-4">
                        <Button id="AgrD" className="btn btn-info" onClick={() => abrirModal()}>Agregar Departamento</Button>
                        <Modal isOpen = {state} style={modalStyles}>
                          <ModalHeader>
                            Iniciar Sesión
                          </ModalHeader>
                          <ModalBody>
                            <FormGroup>
                              <Label for="usuario">Usuario</Label>
                              <Input type="text" id="usuario" placeholder="Usuario"/> 
                            </FormGroup>
                            <FormGroup>
                              <Label for="password">Contraseña</Label>
                              <Input type="text" id="password"/> 
                            </FormGroup>
                          </ModalBody>

                          <ModalFooter>
                              <Button color="primary">Iniciar Sesión</Button>
                              <Button color="secondary" onClick={() => abrirModal()}>Cerrar</Button>
                          </ModalFooter>
                        </Modal>
                      </div>
                  </div>
              </div>
              <div class="table-responsive" id="sailorTableArea">
              <table id="sailorTable" class="table table-striped table-bordered" width="80%">

        <thead id="titulo">
            <tr>
                <th>Codigo Empleado</th>
                <th>Nombre Empleados</th>
                <th>Primer Apellido</th>
                <th>Segundo Apellido</th>
                <th>Fecha de nacimiento</th>
                <th>Nacionalidad</th>
                <th>Dirección</th>
                <th>Correo Electronico</th>
                <th>Telefono</th>
                <th>Fecha de Ingreso</th>
                <th>Puesto</th>
                <th>Departamento</th>
            </tr>
        </thead>
        <tbody id="empleados">
        {ListaEmpleados}
        </tbody>
    </table>
          </div>
      </div>
      </div>
    </div>
</div>
  );
}