import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Apiurl} from '../services/ApiRest';
import { useParams } from "react-router-dom";
import 'tippy.js/dist/tippy.css';
import '../assets/css/depa.css';

export default function Empleados(){

  const [list, setList] = useState([]);

  const params = useParams();
  console.log(params.id)


  useEffect(() => {
    axios({
        url: `${Apiurl}/empleado/getNEmpleado/${params.id}`,
      })
        .then((response) => {
          setList(response.data.data);
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

  const ListaEmpleado = Object.values(list).map(item=>{
    return(
        <>
        <tr id="trT">
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
        </tr>
        </>
    )
  })

  return (
    <div className="flex">
      <div className="h-screen flex-1 p-7" id="hp">
        <div className="contenedor" id="contenedor">
          <div className="table-wrapper">
              <div className="table-title">
                  <div className="row">
                      <div className="col-sm-8"><h2>Lista de <b>Empleados por Departamento</b></h2></div>
                      <div className="col-sm-4">
                      </div>
                  </div>
              </div>
              <table className="table table-bordered" id="Trami">
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
                      </tr>
                  </thead>
                  <tbody>
                          {ListaEmpleado} 
                  </tbody>
              </table>
          </div>
      </div>
      </div>
    </div>
  );
}