import '../assets/css/dashboard.css'
import {MdOutlineMapsHomeWork} from "react-icons/md";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import '../assets/css/depa.css';
import Sidebar from "./Sidebar";

export default function Departamento(){


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
                          <th>Organizacion</th>
                          <th>Correo</th>
                          <th>Telefono</th>
                          <th>Acciones</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>Subhash</td>
                          <td>Administration</td>
                          <td>88***88***</td>
                          <td>
                          </td>
                          <td>
                          </td>
                          <td>
                              <Tippy content="Departamentos">
                                <button type="button" className="btn btn-info" id="botonD">
                                <MdOutlineMapsHomeWork size="23px"/>
                                </button>
                              </Tippy>
                          </td>
                      </tr>      
                  </tbody>
              </table>
          </div>
      </div>
      </div>
    </div>
  );
}