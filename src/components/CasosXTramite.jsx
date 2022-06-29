import Sidebar from "./Sidebar";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Apiurl} from '../services/ApiRest';
import { useParams } from "react-router-dom";

import 'tippy.js/dist/tippy.css';
import '../assets/css/depa.css';

export default function Tramite(){

  const [list, setList] = useState([]);

  const params = useParams();
  console.log(params.id)


  useEffect(() => {
    axios({
      url: `${Apiurl}/casos_abiertos/getNCaso/${params.id}`,
    })
      .then((response) => {
        setList(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const ListaCaso = Object.values(list).map(item=>{
    return(
        <>
        <tr id="trT">
            <td>{item.codigo_caso}</td>
            <td>{item.fecha_apertura_caso}</td>
            <td>{item.fecha_finalizacion_caso}</td>
            <td>{item.codigo_tramite}</td>
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
                      <div className="col-sm-8"><h2>Lista de <b>Casos por Tramite</b></h2></div>
                      <div className="col-sm-4">
                      </div>
                  </div>
              </div>
              <table className="table table-bordered" id="Trami">
                  <thead id="thT">
                      <tr>
                          <th>Codigo de caso</th>
                          <th>Fecha de apertura(AA/MM/DD)</th>
                          <th>Fecha de finalización(AA/MM/DD)</th>
                          <th>Codigo de tramite</th>
                      </tr>
                  </thead>
                  <tbody>
                          {ListaCaso} 
                  </tbody>
              </table>
          </div>
      </div>
      </div>
    </div>
  );
}