import {MdOutlineMapsHomeWork} from "react-icons/md";
import {RiDeleteBin6Line} from "react-icons/ri";
import Tippy from "@tippyjs/react";
import Sidebar from "./Sidebar";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Apiurl} from '../services/ApiRest';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input} from 'reactstrap';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import {HiOutlineDocumentSearch} from "react-icons/hi";

import 'tippy.js/dist/tippy.css';
import '../assets/css/depa.css';

export default function Tramite(){
  
  const[state,setState] = useState()
  const[states,setStates] = useState()
  const [list, setList] = useState([]);


  const [codigo_tramite, setcodigo_tramite] = useState('');
  const [tipo_tramite, settipo_tramite] = useState('');
  const [codigo_departamento, setcodigo_departamento] = useState('');

  const [idTramite, setid] = useState('');
  const [codigo_tramite2, setcodigo_tramite2] = useState('');
  const [tipo_tramite2, settipo_tramite2] = useState('');
  const [codigo_departamento2, setcodigo_departamento2] = useState('');


  const registrarTramite = async () => {

    const datos = {codigo_tramite: codigo_tramite, tipo_tramite:tipo_tramite, codigo_departamento:codigo_departamento}
    try {
        const response = await axios.post(`${Apiurl}/Tramite`, datos);
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

  const updateTramite = async () => {

    const datos = {idTramite:idTramite, codigo_tramite:codigo_tramite2, tipo_tramite:tipo_tramite2, codigo_departamento:codigo_departamento2}
    try {
        const response = await axios.put(`${Apiurl}/tramite/${idTramite}`, datos);
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

  const deleteTramite = async () => {
    
    try {
        const response = await axios.delete(`${Apiurl}/Tramite/${idTramite}`);
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
      url: `${Apiurl}/tramite/getTramite`,
    })
      .then((response) => {
        setList(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const Update = (id,codigo,tipo,codigoDep)=>{
    console.log(id)
    abrirModa()
    setid(id)
    setcodigo_tramite2(codigo)
    settipo_tramite2(tipo)
    setcodigo_departamento2(codigoDep)
  }

  const Delete = (id)=>{
    console.log(id);
    setid(id);
    console.log(idTramite);
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
        deleteTramite()
      }
    })
    
  }



  const ListaTramite = Object.values(list).map(item=>{
    return(
        <>
        <tr>
          <td>{item.codigo_tramite}</td>
          <td>{item.tipo_tramite}</td>
          <td>{item.codigo_departamento}</td>
          <td>
              <Tippy content="Tramites">
                <button  type="button" className="btn btn-info" name={item._id} onClick={()=>Update(item._id,item.codigo_tramite,item.tipo_tramite,item.codigo_departamento)}>
                <MdOutlineMapsHomeWork size="23px"/>
                </button>
              </Tippy>
              <>&nbsp;&nbsp;&nbsp;</>
              <Tippy content="Tramites">
                <button type="button" className="btn btn-danger" name={item._id} onClick={()=>Delete(item._id)}>
                <RiDeleteBin6Line size="23px"/>
                </button>
              </Tippy>
              <>&nbsp;&nbsp;&nbsp;</>
              <Link to={`/CasosXTra/${item._id}`}>
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
                      <div className="col-sm-8"><h2>Lista <b>Tramites</b></h2></div>
                      <div className="col-sm-4">
                        <Button id="AgrD" className="btn btn-info" onClick={() => abrirModal()}>Agregar Tramites</Button>
                        <Modal isOpen = {state} style={modalStyles}>
                          <ModalHeader>
                            Registrar Tramite
                          </ModalHeader>
                          <ModalBody>
                            <FormGroup>
                              <Input  type="text" id="codDepa" placeholder="Codigo Tramite" onChange={(e) => setcodigo_tramite(e.target.value)}/> 
                            </FormGroup>
                            <FormGroup>
                              <Input type="text" id="nombre" placeholder="Tipo Tramite" onChange={(e) => settipo_tramite(e.target.value)}/> 
                            </FormGroup>
                            <FormGroup>
                              <Input type="text" id="correo" placeholder="Codigo Departamento" onChange={(e) => setcodigo_departamento(e.target.value)}/> 
                            </FormGroup>
                          </ModalBody>

                          <ModalFooter>
                              <Button color="primary" onClick={registrarTramite}>Registrar</Button>
                              <Button color="secondary" onClick={() => abrirModal()}>Cerrar</Button>
                          </ModalFooter>
                        </Modal>
                        <Modal isOpen = {states} style={modalStyles}>
                          <ModalHeader>
                            Actualizar Tramite
                          </ModalHeader>
                          <ModalBody>
                          <FormGroup>
                              <Input type="text" id="id" value={idTramite} onChange={(e) => setid(e.target.value)}/> 
                            </FormGroup>
                            <FormGroup>
                              <Input type="text" id="codDepa" placeholder={codigo_tramite2} onChange={(e) => setcodigo_tramite2(e.target.value)}/> 
                            </FormGroup>
                            <FormGroup>
                              <Input type="text" id="nombre" placeholder={tipo_tramite2} onChange={(e) => settipo_tramite2(e.target.value)}/> 
                            </FormGroup>
                            <FormGroup>
                              <Input type="text" id="correo" placeholder={codigo_departamento2} onChange={(e) => setcodigo_departamento2(e.target.value)}/> 
                            </FormGroup>
                          </ModalBody>

                          <ModalFooter>
                              <Button color="primary" onClick={updateTramite}>Registrar</Button>
                              <Button color="secondary" onClick={() => abrirModa()}>Cerrar</Button>
                          </ModalFooter>
                        </Modal>
                      </div>
                  </div>
              </div>
              <table className="table table-bordered" id="Trami">
                  <thead id="thT">
                      <tr>
                          <th>Codigo_tramite</th>
                          <th>tipo_tramite</th>
                          <th>Codigo_departamento</th>
                          <th>Acciones</th>
                      </tr>
                  </thead>
                  <tbody>
                          {ListaTramite} 
                  </tbody>
              </table>
          </div>
      </div>
      </div>
    </div>
  );
}