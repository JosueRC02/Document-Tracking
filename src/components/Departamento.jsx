import {MdOutlineMapsHomeWork} from "react-icons/md";
import Tippy from "@tippyjs/react";
import Sidebar from "./Sidebar";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Apiurl} from '../services/ApiRest';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input} from 'reactstrap';
import Swal from 'sweetalert2';

import 'tippy.js/dist/tippy.css';
import '../assets/css/depa.css';




export default function Departamento(){
  
  const[state,setState] = useState()
  const [list, setList] = useState([]);

  const [codigo_departamento, setcodigo_departamento] = useState('');
  const [nombre_departamento, setnombre_departamento] = useState('');
  const [correo_departamento, setcorreo_departamento] = useState('');
  const [organizacion, setorganizacion] = useState('');
  const [telefono_departamento, settelefono_departamento] = useState('');

  const registrarDepartamento = async () => {

    const datos = {codigo_departamento: codigo_departamento, nombre_departamento:nombre_departamento, correo_departamento:correo_departamento, organizacion:organizacion, telefono_departamento:telefono_departamento}
    try {
        const response = await axios.post(`${Apiurl}/departamento`, datos);
        console.log(response);
        console.log(response.data.status);
        Swal.fire({
            text: 'Datos ingresados correctamente',
            showConfirmButton: false,
            icon: 'success',
            timer: 1500
          })
          window.location.reload();
    } catch (error) {
        console.log("Error: ", error.response.data);
        Swal.fire({
            icon: 'error',
            text: 'Datos ingresados de manera incorrecta',
            showConfirmButton: false,
            timer: 1500
          })
        return error;
    }
  }

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

  function Id (ptmid){
    console.log(ptmid)
    const [lista, setLista] = useState([]);
  
    useEffect(() => {
      axios({
        url: `${Apiurl}/departamento/getNDepartamento/`+ptmid,
      })
        .then((response) => {
          setLista(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    const List = Object.values(lista).map(item=>{
      return(
          <>
            {item.nombre_organizacion}
          </>
      )
    })
  
    return List;
  
  }

  

  const ListaDepartamentos = Object.values(list).map(item=>{
    return(
        <>
        <tr>
          <td>{item.codigo_departamento}</td>
          <td>{item.nombre_departamento}</td>
          <td>{item.correo_departamento}</td>
          <td>{Id(item.organizacion)}</td>
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
                            Registrar Departamento
                          </ModalHeader>
                          <ModalBody>
                            <FormGroup>
                              <Input type="text" id="codDepa" placeholder="Codigo departamento" onChange={(e) => setcodigo_departamento(e.target.value)}/> 
                            </FormGroup>
                            <FormGroup>
                              <Input type="text" id="nombre" placeholder="Nombre departamento" onChange={(e) => setnombre_departamento(e.target.value)}/> 
                            </FormGroup>
                            <FormGroup>
                              <Input type="text" id="correo" placeholder="Correo departamento" onChange={(e) => setcorreo_departamento(e.target.value)}/> 
                            </FormGroup>
                            <FormGroup>
                              <Input type="text" id="codOrga" placeholder="Codigo organizacion" onChange={(e) => setorganizacion(e.target.value)}/> 
                            </FormGroup>
                            <FormGroup>
                              <Input type="text" id="telefono" placeholder="Telefono departamento" onChange={(e) => settelefono_departamento(e.target.value)}/> 
                            </FormGroup>
                          </ModalBody>

                          <ModalFooter>
                              <Button color="primary" onClick={registrarDepartamento}>Registrar</Button>
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