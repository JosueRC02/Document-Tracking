import {MdOutlineMapsHomeWork} from "react-icons/md";
import Tippy from "@tippyjs/react";
import Sidebar from "./Sidebar";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Apiurl} from '../services/ApiRest';

import 'tippy.js/dist/tippy.css';
import '../assets/css/depa.css';

export default function Departamento(){

  // const[datadepartamentos,setdatadepartamento] = useState([])

  // useEffect( () => {
  //         axios.get(`${Apiurl}/departamento/getDepartamento`).then(res => {
  //             console.log(res.data.data)
  //             setdatadepartamento(res.data.data)
  //         }).catch( err =>{console.log(err)}
  //         ) 
  // },[])

  // const listadepartamentos = Object.values(datadepartamentos).map(departamento=>{
  //     return(
  //         <div>
  //             <br />
  //             <br />
  //            <h3>{departamento.nombre_departamento}</h3>
  //         </div>
  //     )
  // })

  //-----------------------------------------------------------------------------------------------

  const [list, setList] = useState([]);

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
                          <button id="AgrD" type="button" className="btn btn-info">Agregar Departamento</button>
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

