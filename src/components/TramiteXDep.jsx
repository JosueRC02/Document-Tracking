import {HiOutlineDocumentSearch} from "react-icons/hi";
import Tippy from "@tippyjs/react";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Apiurl} from '../services/ApiRest';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

import 'tippy.js/dist/tippy.css';
import '../assets/css/depa.css';

export default function Tramite(){

  const [list, setList] = useState([]);

  const params = useParams();
  console.log(params.id)


  useEffect(() => {
    axios({
        url: `${Apiurl}/tramite/getNTramite/${params.id}`,
      })
        .then((response) => {
          setList(response.data.data);
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

  const ListaTramite = Object.values(list).map(item=>{
    return(
        <>
        <tr id="trT">
          <td>{item.codigo_tramite}</td>
          <td>{item.tipo_tramite}</td>
          <td>{item.codigo_departamento}</td>
          <td>
              <Link to={`/CasosXTra/${item._id}`}>
                <Tippy content="Ver Casos">
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

  return (
    <div className="flex">
      <div className="h-screen flex-1 p-7" id="hp">
        <div className="contenedor" id="contenedor">
          <div className="table-wrapper">
              <div className="table-title">
                  <div className="row">
                      <div className="col-sm-8"><h2>Lista de <b>tramites por Departamento</b></h2></div>
                      <div className="col-sm-4">
                      </div>
                  </div>
              </div>
              <table className="table table-bordered" id="Trami">
                  <thead id="thT">
                      <tr>
                          <th>Codigo de tramite</th>
                          <th>Tipo de tramite</th>
                          <th>Codigo de departamento</th>
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