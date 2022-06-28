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
import '../assets/css/depa.css';

export default function Tramite(){
  
  const[state,setState] = useState()
  const[states,setStates] = useState()
  const [list, setList] = useState([]);


  const [codigo_caso, setcodigo_caso] = useState('');
  const [fecha_apertura_caso, setfecha_apertura_caso] = useState('');
  const [fecha_finalizacion_caso, setfecha_finalizacion_caso] = useState('');
  const [codigo_tramite, setcodigo_tramite] = useState('');

  const [idCaso, setId] = useState('');
  const [codigo_caso2, setcodigo_caso2] = useState('');
  const [fecha_apertura_caso2, setfecha_apertura_caso2] = useState('');
  const [fecha_finalizacion_caso2, setfecha_finalizacion_caso2] = useState('');
  const [codigo_tramite2, setcodigo_tramite2] = useState('');

  const registrarCaso = async () => {

    const datos = {codigo_caso, fecha_apertura_caso, fecha_finalizacion_caso,codigo_tramite}
    try {
        const response = await axios.post(`${Apiurl}/casos_abiertos`, datos);
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

  const updateCaso = async () => {

    const datos = {idCaso:idCaso, codigo_caso:codigo_caso2, fecha_apertura_caso:fecha_apertura_caso2, fecha_finalizacion:fecha_finalizacion_caso2,codigo_tramite:codigo_tramite2}
    try {
        const response = await axios.put(`${Apiurl}/casos_abiertos/${idCaso}`, datos);
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

  const deleteCaso = async () => {
    
    try {
        const response = await axios.delete(`${Apiurl}/casos_abiertos/${idCaso}`);
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
      console.log("entro2");
    }else{
      setStates(!states);
      console.log("entro3");
    }
  }


  useEffect(() => {
    axios({
      url: `${Apiurl}/casos_abiertos/getCaso`,
    })
      .then((response) => {
        setList(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const Update = (id,codigo,fechaApe,fechaFin,codigoTra)=>{
    console.log(id)
    abrirModa()
    setId(id)
    setcodigo_caso2(codigo)
    setfecha_apertura_caso2(fechaApe)
    setfecha_finalizacion_caso2(fechaFin)
    setcodigo_tramite2(codigoTra)
  }

  const Delete = (id)=>{
    console.log(id);
    setId(id);
    console.log(idCaso);
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
          'El tramite fue eliminado',
          'Exitoso'
        )
        deleteCaso()
      }
    })
    
  }



  const ListaCasos = Object.values(list).map(item=>{
    return(
        <>
        <tr>
          <td>{item.codigo_caso}</td>
          <td>{item.fecha_apertura_caso}</td>
          <td>{item.fecha_finalizacion_caso}</td>
          <td>{item.codigo_tramite}</td>
          <td>
              <Tippy content="Tramites">
                <button  type="button" className="btn btn-info" name={item._id} onClick={()=>Update(item._id,item.codigo_caso,item.fecha_apertura_caso,item.fecha_finalizacion_caso,item.codigo_tramite)}>
                <MdOutlineMapsHomeWork size="23px"/>
                </button>
              </Tippy>
              <>&nbsp;&nbsp;&nbsp;</>
              <Tippy content="Tramites">
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
                      <div className="col-sm-8"><h2>Lista <b>Casos</b></h2></div>
                      <div className="col-sm-4">
                        <Button id="AgrD" className="btn btn-info" onClick={() => abrirModal()}>Agregar Casos</Button>
                        <Modal isOpen = {state} style={modalStyles}>
                          <ModalHeader>
                            Registrar Caso
                          </ModalHeader>
                          <ModalBody>
                            <FormGroup>
                              <Input  type="text" id="codCaso" placeholder="Codigo Caso" onChange={(e) => setcodigo_caso(e.target.value)}/> 
                            </FormGroup>
                            <FormGroup>
                              <Input type="text" id="fechaAper" placeholder="Fecha de apertura" onChange={(e) => setfecha_apertura_caso(e.target.value)}/> 
                            </FormGroup>
                            <FormGroup>
                              <Input type="text" id="fechaFin" placeholder="Fecha de finalizacion" onChange={(e) => setfecha_finalizacion_caso(e.target.value)}/> 
                            </FormGroup>
                            <FormGroup>
                              <Input type="text" id="codTra" placeholder="Codigo Tramite" onChange={(e) => setcodigo_tramite(e.target.value)}/> 
                            </FormGroup>
                          </ModalBody>

                          <ModalFooter>
                              <Button color="primary" onClick={registrarCaso}>Registrar</Button>
                              <Button color="secondary" onClick={() => abrirModal()}>Cerrar</Button>
                          </ModalFooter>
                        </Modal>
                        <Modal isOpen = {states} style={modalStyles}>
                          <ModalHeader>
                            Actualizar Tramite
                          </ModalHeader>
                          <ModalBody>
                          <FormGroup>
                              <Input type="text" id="id" value={idCaso} onChange={(e) => setId(e.target.value)}/> 
                            </FormGroup>
                            <FormGroup>
                              <Input  type="text" id="codCaso" placeholder={codigo_caso2} onChange={(e) => setcodigo_caso2(e.target.value)}/> 
                            </FormGroup>
                            <FormGroup>
                              <Input type="text" id="fechaAper" placeholder={fecha_apertura_caso2} onChange={(e) => setfecha_apertura_caso2(e.target.value)}/> 
                            </FormGroup>
                            <FormGroup>
                              <Input type="text" id="fechaFin" placeholder={fecha_finalizacion_caso2} onChange={(e) => setfecha_finalizacion_caso2(e.target.value)}/> 
                            </FormGroup>
                            <FormGroup>
                              <Input type="text" id="codTra" placeholder={codigo_tramite2} onChange={(e) => setcodigo_tramite2(e.target.value)}/> 
                            </FormGroup>
                          </ModalBody>

                          <ModalFooter>
                              <Button color="primary" onClick={updateCaso}>Actualizar</Button>
                              <Button color="secondary" onClick={() => abrirModa()}>Cerrar</Button>
                          </ModalFooter>
                        </Modal>
                      </div>
                  </div>
              </div>
              <table className="table table-bordered" id="Trami">
                  <thead>
                      <tr>
                          <th>Codigo de caso</th>
                          <th>Fecha de apertura(AA/MM/DD)</th>
                          <th>Fecha de finalización(AA/MM/DD)</th>
                          <th>Codigo de tramite</th>
                          <th>Acciones</th>
                      </tr>
                  </thead>
                  <tbody>
                          {ListaCasos} 
                  </tbody>
              </table>
          </div>
      </div>
      </div>
    </div>
  );
}