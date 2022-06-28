import {MdOutlineMapsHomeWork} from "react-icons/md";
import {RiDeleteBin6Line} from "react-icons/ri";
import Tippy from "@tippyjs/react";
import Sidebar from "./Sidebar";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Apiurl} from '../services/ApiRest';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input} from 'reactstrap';
import Swal from 'sweetalert2';

import 'tippy.js/dist/tippy.css'; 
import '../assets/css/Empleados.css';

export default function Empleados(){
  
  const[state,setState] = useState()
  const[states,setStates] = useState()
  const [list, setList] = useState([]);

  const [codigo_empleado, setcodigo_empleado] = useState('');
  const [nombre_empleado, setnombre_empleado] = useState('');
  const [primer_apellido_empleado, setprimer_apellido_empleado] = useState('');
  const [segundo_apellido_empleado, setsegundo_apellido_empleado] = useState('');
  const [fec_nac_empleado, setfec_nac_empleado] = useState('');
  const [nacionalidad_empleado, setnacionalidad_empleado] = useState('');
  const [direccion_empleado, setdireccion_empleado] = useState('');
  const [correo_empleado, setcorreo_empleado] = useState('');
  const [telefono_empleado, settelefono_empleado] = useState('');
  const [fec_ingreso_empleado, setfec_ingreso_empleado] = useState('');
  const [puesto_empleado, setpuesto_empleado] = useState('');
  const [nombre_departamento, setnombre_departamento] = useState('');

  const [idEmpleado, setIdEmpleado] = useState('');
  const [codigo_empleado2, setcodigo_empleado2] = useState('');
  const [nombre_empleado2, setnombre_empleado2] = useState('');
  const [primer_apellido_empleado2, setprimer_apellido_empleado2] = useState('');
  const [segundo_apellido_empleado2, setsegundo_apellido_empleado2] = useState('');
  const [fec_nac_empleado2, setfec_nac_empleado2] = useState('');
  const [nacionalidad_empleado2, setnacionalidad_empleado2] = useState('');
  const [direccion_empleado2, setdireccion_empleado2] = useState('');
  const [correo_empleado2, setcorreo_empleado2] = useState('');
  const [telefono_empleado2, settelefono_empleado2] = useState('');
  const [fec_ingreso_empleado2, setfec_ingreso_empleado2] = useState('');
  const [puesto_empleado2, setpuesto_empleado2] = useState('');
  const [nombre_departamento2, setnombre_departamento2] = useState('');

  const registrarEmpleados = async () => {

    const datos = {codigo_empleado, nombre_empleado, primer_apellido_empleado, segundo_apellido_empleado, fec_nac_empleado, nacionalidad_empleado, direccion_empleado, correo_empleado, telefono_empleado, fec_ingreso_empleado, puesto_empleado, nombre_departamento}
    try {
        const response = await axios.post(`${Apiurl}/empleado`, datos);
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

  const updateEmpleado = async () => {

    const datos = {id: idEmpleado, codigo_empleado:codigo_empleado2, nombre_empleado:nombre_empleado2, primer_apellido_empleado:primer_apellido_empleado2, segundo_apellido_empleado:segundo_apellido_empleado2, fec_nac_empleado:fec_nac_empleado2, nacionalidad_empleado:nacionalidad_empleado2, direccion_empleado2:direccion_empleado2, correo_empleado:correo_empleado2, telefono_empleado:telefono_empleado2, fec_ingreso_empleado2:fec_ingreso_empleado2, puesto_empleado:puesto_empleado2, nombre_departamento:nombre_departamento2}
    try {
        const response = await axios.put(`${Apiurl}/empleado/${idEmpleado}`, datos);
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

  const deleteEmpleados = async () => {
    
    try {
        const response = await axios.delete(`${Apiurl}/empleado/${idEmpleado}`);
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
      setState(!state);
    }else{
      setState(!state);
    }
    
  }

  const abrirModa=()=>{
    if(states === false){
      setStates(!states);
    }else{
      setStates(!states);
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

  const Update = (idEmpleado, codigo_empleado, nombre_empleado, primer_apellido_empleado, segundo_apellido_empleado, fec_nac_empleado, nacionalidad_empleado, direccion_empleado, correo_empleado, telefono_empleado, fec_ingreso_empleado, puesto_empleado, nombre_departamento)=>{
    console.log(idEmpleado)
    abrirModa()
    setIdEmpleado(idEmpleado)
    setcodigo_empleado2(codigo_empleado)
    setnombre_empleado2(nombre_empleado)
    setprimer_apellido_empleado2(primer_apellido_empleado)
    setsegundo_apellido_empleado2(segundo_apellido_empleado)
    setfec_nac_empleado2(fec_nac_empleado)
    setnacionalidad_empleado2(nacionalidad_empleado)
    setdireccion_empleado2(direccion_empleado)
    setcorreo_empleado2(correo_empleado)
    settelefono_empleado2(telefono_empleado)
    setfec_ingreso_empleado2(fec_ingreso_empleado)
    setpuesto_empleado2(puesto_empleado)
    setnombre_departamento2(nombre_departamento)
  }

  const Delete = (id)=>{
    console.log(id);
    setIdEmpleado(id);
    console.log(idEmpleado);
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
        deleteEmpleados()
      }
    })
    
  }

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
            <Tippy content="Actualizar">
                <button type="button" className="btn btn-info" id="botonD" name={item._id} onClick={()=>Update(item._id, item.codigo_empleado, item.nombre_empleado, item.primer_apellido_empleado, item.segundo_apellido_empleado, item.fec_nac_empleado, item.nacionalidad_empleado, item.direccion_empleado, item.correo_empleado, item.telefono_empleado, item.fec_ingreso_empleado, item.puesto_empleado, item.nombre_departamento)}>
                <MdOutlineMapsHomeWork size="23px"/>
                </button>
            </Tippy>
              <Tippy content="Eliminar">
                <button type="button" className="btn btn-danger" name={item._id} onClick={()=>Delete(item._id)}>
                <RiDeleteBin6Line size="23px"/>
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
                        <div className="col-sm-8"><h2>Lista <b>Empleados</b></h2></div>
                        <div id="formulario">
                          <Button id="AgrE" className="btn btn-info" onClick={() => abrirModal()}>Agregar Empleado</Button>
                          <Modal isOpen = {state} style={modalStyles} id="modal">
                            <ModalHeader>
                              Agregar Empleado
                            </ModalHeader>
                            <ModalBody>
                              <div className = "user-details">
                              <FormGroup className = "input-box">
                                <Input type="text" id="form" placeholder="Codigo Empleado" onChange={(e) => setcodigo_empleado(e.target.value)}/> 
                              </FormGroup>
                              <FormGroup className = "input-box">
                                <Input type="text" id="form" placeholder="Nombre Empleado" onChange={(e) => setnombre_empleado(e.target.value)}/> 
                              </FormGroup>
                              <FormGroup className = "input-box">
                                <Input type="text" id="form" placeholder="Primer Aapellido" onChange={(e) => setprimer_apellido_empleado(e.target.value)}/> 
                              </FormGroup>
                              <FormGroup className = "input-box">
                                <Input type="text" id="form" placeholder="Segundo Apellido" onChange={(e) => setsegundo_apellido_empleado(e.target.value)}/> 
                              </FormGroup>
                              <FormGroup className = "input-box">
                                <Input type="text" id="form" placeholder="Fecha Nacimiento" onChange={(e) => setfec_nac_empleado(e.target.value)}/> 
                              </FormGroup>
                              <FormGroup className = "input-box">
                                <Input type="text" id="form" placeholder="Nacionalidad" onChange={(e) => setnacionalidad_empleado(e.target.value)}/> 
                              </FormGroup>
                              <FormGroup className = "input-box">
                                <Input type="text" id="form" placeholder="Direccion" onChange={(e) => setdireccion_empleado(e.target.value)}/> 
                              </FormGroup>
                              <FormGroup className = "input-box">
                              <Input type="text" id="form" placeholder="Correo Electronico" onChange={(e) => setcorreo_empleado(e.target.value)}/> 
                              </FormGroup>
                              <FormGroup className = "input-box">
                              <Input type="text" id="form" placeholder="Telefono" onChange={(e) => settelefono_empleado(e.target.value)}/> 
                              </FormGroup>
                              <FormGroup className = "input-box">
                              <Input type="text" id="form" placeholder="Fecha de Ingreso" onChange={(e) => setfec_ingreso_empleado(e.target.value)}/> 
                              </FormGroup>
                              <FormGroup className = "input-box">
                              <Input type="text" id="form" placeholder="Puesto" onChange={(e) => setpuesto_empleado(e.target.value)}/>  
                              </FormGroup>
                              <FormGroup className = "input-box">
                              <Input type="text" id="form" placeholder="Departamento" onChange={(e) => setnombre_departamento(e.target.value)}/>  
                              </FormGroup>
                              </div>
                            </ModalBody>

                            <ModalFooter>
                                <Button color="primary" onClick={registrarEmpleados}>Registrar</Button>
                                <Button color="secondary" onClick={() => abrirModal()}>Cerrar</Button>
                            </ModalFooter>
                          </Modal>

                          <Modal isOpen = {states} style={modalStyles} id="modal">
                            <ModalHeader>
                              Actualizar Empleado
                            </ModalHeader>
                            <ModalBody>
                            <div className = "user-details">
                              <FormGroup className = "input-box">
                                <Input type="text" id="form" value={idEmpleado} onChange={(e) => setIdEmpleado(e.target.value)}/> 
                              </FormGroup>
                              <FormGroup className = "input-box">
                                <Input type="text" id="form" placeholder={codigo_empleado2} onChange={(e) => setcodigo_empleado2(e.target.value)}/> 
                              </FormGroup>
                              <FormGroup className = "input-box">
                                <Input type="text" id="form" placeholder={nombre_empleado2} onChange={(e) => setnombre_empleado2(e.target.value)}/> 
                              </FormGroup>
                              <FormGroup className = "input-box">
                                <Input type="text" id="form" placeholder={primer_apellido_empleado2} onChange={(e) => setprimer_apellido_empleado2(e.target.value)}/> 
                              </FormGroup>
                              <FormGroup className = "input-box">
                                <Input type="text" id="form" placeholder={segundo_apellido_empleado2} onChange={(e) => setsegundo_apellido_empleado2(e.target.value)}/> 
                              </FormGroup>
                              <FormGroup className = "input-box">
                                <Input type="text" id="form" placeholder={fec_nac_empleado2} onChange={(e) => setfec_nac_empleado2(e.target.value)}/> 
                              </FormGroup>
                              <FormGroup className = "input-box">
                                <Input type="text" id="form" placeholder={nacionalidad_empleado2} onChange={(e) => setnacionalidad_empleado2(e.target.value)}/> 
                              </FormGroup>
                              <FormGroup className = "input-box">
                                <Input type="text" id="form" placeholder={direccion_empleado2} onChange={(e) => setdireccion_empleado2(e.target.value)}/> 
                              </FormGroup>
                              <FormGroup className = "input-box">
                              <Input type="text" id="form" placeholder={correo_empleado2} onChange={(e) => setcorreo_empleado2(e.target.value)}/> 
                              </FormGroup>
                              <FormGroup className = "input-box">
                              <Input type="text" id="form" placeholder={telefono_empleado2} onChange={(e) => settelefono_empleado2(e.target.value)}/> 
                              </FormGroup>
                              <FormGroup className = "input-box">
                              <Input type="text" id="form" placeholder={fec_ingreso_empleado2} onChange={(e) => setfec_ingreso_empleado2(e.target.value)}/> 
                              </FormGroup>
                              <FormGroup className = "input-box">
                              <Input type="text" id="form" placeholder={puesto_empleado2} onChange={(e) => setpuesto_empleado2(e.target.value)}/>  
                              </FormGroup>
                              <FormGroup className = "input-box">
                              <Input type="text" id="form" placeholder={nombre_departamento2} onChange={(e) => setnombre_departamento2(e.target.value)}/>  
                              </FormGroup>
                              </div>
                            </ModalBody>
                            
                            <ModalFooter>
                                <Button color="primary" onClick={updateEmpleado}>Registrar</Button>
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
                          <th>Primer Apellido</th>
                          <th>Segundo Apellido</th>
                          <th>Fecha Nacimiento</th>
                          <th>Nacionalidad</th>
                          <th>Direccion</th>
                          <th>Correo Electronico</th>
                          <th>Telefono</th>
                          <th>Fecha de Ingreso</th>
                          <th>Puesto</th>
                          <th>Departamento</th>
                          <th>Acciones</th>
                      </tr>
                  </thead>
                  <tbody>
                    {ListaEmpleados}
                  </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

