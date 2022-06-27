import {MdOutlineMapsHomeWork} from "react-icons/md";
import Tippy from "@tippyjs/react";
import Sidebar from "./Sidebar";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Apiurl} from '../services/ApiRest';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';

import 'tippy.js/dist/tippy.css';
import '../assets/css/depa.css';

export default function Departamento(){
  
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
      url: `${Apiurl}/departamento/getDepartamento`,
    })
      .then((response) => {
        setList(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const ListaDepartamentos = Object.values(list).map(item=>{
    return(
        <>
        <tr>
          <td>{item.codigo_departamento}</td>
          <td>{item.nombre_departamento}</td>
          <td>{item.correo_departamento}</td>
          <td>{item.organizacion}</td>
          <td>{item.telefono_departamento}</td>
          <td>
              <Tippy content="Departamentos">
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
              <table className="table table-bordered">
                  <thead>
                      <tr>
                          <th>Codigo</th>
                          <th>Nombre</th>
                          <th>Correo</th>
                          <th>Organizacion</th>
                          <th>Telefono</th>
                          <th>Acciones</th>
                      </tr>
                  </thead>
                  <tbody>
                          {ListaDepartamentos} 
                  </tbody>
              </table>
          </div>
      </div>
      </div>
    </div>
  );
}

