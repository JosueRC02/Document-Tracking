import {MdOutlineMapsHomeWork} from "react-icons/md";
import {RiDeleteBin6Line} from "react-icons/ri";
import {HiOutlineDocumentSearch} from "react-icons/hi";
import {MdOutlinePeopleAlt} from "react-icons/md";
import Tippy from "@tippyjs/react";
import Sidebar from "./Sidebar";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Apiurl} from '../services/ApiRest';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input} from 'reactstrap';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

import 'tippy.js/dist/tippy.css';
import '../assets/css/depa.css';

export default function Departamento(){
  const[state,setState] = useState()
  const[states,setStates] = useState()
  //const [idOrg, setIdOrg] = useState();
  //const [Org, setOrg] = useState([]);
  const [list, setList] = useState([]);

  const [codigo_departamento, setcodigo_departamento] = useState('');
  const [nombre_departamento, setnombre_departamento] = useState('');
  const [correo_departamento, setcorreo_departamento] = useState('');
  const [organizacion, setorganizacion] = useState('');
  const [telefono_departamento, settelefono_departamento] = useState('');

  const [idDepartamento, setid] = useState('');
  const [codigo_departamento2, setcodigo_departamento2] = useState('');
  const [nombre_departamento2, setnombre_departamento2] = useState('');
  const [correo_departamento2, setcorreo_departamento2] = useState('');
  const [organizacion2, setorganizacion2] = useState('');
  const [telefono_departamento2, settelefono_departamento2] = useState('');

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

  const updateDepartamento = async () => {

    const datos = {idd:idDepartamento,codigo_departamento: codigo_departamento2, nombre_departamento:nombre_departamento2, correo_departamento:correo_departamento2, organizacion:organizacion2, telefono_departamento:telefono_departamento2}
    try {
        const response = await axios.put(`${Apiurl}/departamento/${idDepartamento}`, datos);
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

  const deleteDepartamento = async () => {
    
    try {
        const response = await axios.delete(`${Apiurl}/departamento/${idDepartamento}`);
        console.log(response);
        console.log(response.data.status);
        window.location.reload();
    } catch (error) {
        console.log("Error: ", error.response.data);
        Swal.fire({
            icon: 'error',
            text: 'Ha ocurrido un problema, vuelva a intentarlo',
            showConfirmButton: false,
            timer: 1500
          })
        return error;
    }
  }

  const abrirModal=()=>{
    if(state === false){
      console.log("false");
      setState(!state);
      
    }else{
      console.log("true");
      setState(!state);
    }
  }

  const abrirModa=()=>{
    if(states === false){
      setStates(!states);
      console.log("entro2");
    }else{
      setStates(!states);
      console.log("entro3");
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

  const Update = (id,codigo,nombre,correo,organizacion,telefono)=>{
    console.log(id)
    abrirModa()
    setid(id)
    setcodigo_departamento2(codigo)
    setnombre_departamento2(nombre)
    setcorreo_departamento2(correo)
    setorganizacion2(organizacion)
    settelefono_departamento2(telefono)
  }

  const Delete = (id)=>{
    console.log(id);
    setid(id);
    console.log(idDepartamento);
    Swal.fire({
      title: '¿Seguro?',
      text: "¿Está seguro que desea eliminar el registro?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'El departamento fue eliminado',
          'Exitoso'
        )
        deleteDepartamento()
      }
    })
    
  }


  const ListaDepartamentos = Object.values(list).map(item=>{
    return(
        <>
        <tr id="trT">
          <td>{item.codigo_departamento}</td>
          <td>{item.nombre_departamento}</td>
          <td>{item.correo_departamento}</td>
          <td>{item.organizacion}</td>
          <td>{item.telefono_departamento}</td>
          <td >
              <Tippy content="Actualizar">
                <button  type="button" className="btn btn-info" name={item._id} onClick={()=>Update(item._id,item.codigo_departamento,item.nombre_departamento,item.correo_departamento,item.organizacion,item.telefono_departamento)}>
                <MdOutlineMapsHomeWork size="23px"/>
                </button>
              </Tippy>
              <>&nbsp;&nbsp;&nbsp;</>
              <Tippy content="Eliminar">
                <button type="button" className="btn btn-danger" name={item._id} onClick={()=>Delete(item._id)}>
                <RiDeleteBin6Line size="23px"/>
                </button>
              </Tippy>
              <>&nbsp;&nbsp;&nbsp;</>
              <Link to={`/EmpleadosXDep/${item._id}`}>
                <Tippy content="Ver Empleados">
                  <button type="button" className="btn btn-success">
                  <MdOutlinePeopleAlt size="23px"/>
                  </button>
                </Tippy>
              </Link>
              <>&nbsp;&nbsp;&nbsp;</>
              <Link to={`/TramiteXDep/${item._id}`}>
                <Tippy content="Ver Tramites">
                  <button type="button" className="btn btn-success">
                  <HiOutlineDocumentSearch size="23px"/>
                  </button>
                </Tippy>
              </Link>
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
                              <Input  type="text" id="codDepa" placeholder="Codigo departamento" onChange={(e) => setcodigo_departamento(e.target.value)}/> 
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
                        <Modal isOpen = {states} style={modalStyles}>
                          <ModalHeader>
                            Actualizar Departamento
                          </ModalHeader>
                          <ModalBody>
                          <FormGroup>
                              <Input type="text" id="id" value={idDepartamento} onChange={(e) => setid(e.target.value)}/> 
                            </FormGroup>
                            <FormGroup>
                              <Input type="text" id="codDepa" placeholder={codigo_departamento2} onChange={(e) => setcodigo_departamento2(e.target.value)}/> 
                            </FormGroup>
                            <FormGroup>
                              <Input type="text" id="nombre" placeholder={nombre_departamento2} onChange={(e) => setnombre_departamento2(e.target.value)}/> 
                            </FormGroup>
                            <FormGroup>
                              <Input type="text" id="correo" placeholder={correo_departamento2} onChange={(e) => setcorreo_departamento2(e.target.value)}/> 
                            </FormGroup>
                            <FormGroup>
                              <Input type="text" id="codOrga" placeholder={organizacion2} onChange={(e) => setorganizacion2(e.target.value)}/> 
                            </FormGroup>
                            <FormGroup>
                              <Input type="text" id="telefono" placeholder={telefono_departamento2} onChange={(e) => settelefono_departamento2(e.target.value)}/> 
                            </FormGroup>
                          </ModalBody>

                          <ModalFooter>
                              <Button color="primary" onClick={updateDepartamento}>Registrar</Button>
                              <Button color="secondary" onClick={() => abrirModa()}>Cerrar</Button>
                          </ModalFooter>
                        </Modal>
                      </div>
                  </div>
              </div>
              <table className="table table-bordered">
                  <thead id="thT">
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