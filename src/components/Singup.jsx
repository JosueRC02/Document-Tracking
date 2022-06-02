import React, { Component } from 'react'
import logo from '../assets/img/registrar.png';
import '../assets/css/inicios.css'
import {Apiurl} from '../services/ApiRest';
import axios from 'axios';

export default class Singup extends Component{

        state = {
          form:{
              "codigo_departamento": "",
              "nombre_departamento": "",
              //"empleados_departamento": "",
              "correo_departamento": "",
              "telefono_departamento": "",
              "password":""
          },
          error:false,
          errorMsg:""
      }

      manejadorBtn = e => {
          e.preventDefault();
      }

      change = async e => {
          await this.setState({
              form:{
                  ...this.state.form,
                  [e.target.name] : e.target.value
              }
          })
      }

  registrarse = async () => {
    try {
        console.log(this.state.form);
        const response = await axios.post(`${Apiurl}/departamento/signUpDepartamento`,  this.state.form);
        console.log(response);
        console.log(response.data.status);
        alert("Registrado correctamente");
        console.log(this.props.history.push("/"));
        window.location.reload(true);
    } catch (error) {
        alert("Faltan datos");
        console.log("Error: ", error.response.data);
        window.location.reload(true);
        return error;
    }
  }

  render() {
    return (
      <React.Fragment>
          <div className="wrapper fadeInDown">
                    <div id="formContent">

                        <div className="fadeIn first">
                            <br/><br/>
                        <img src={logo} width = "150px" alt="User Icon" />
                            <br/><br/>
                        </div>

                        <form onSubmit = {this.manejadorBtn}>
                        <input type="text" className="fadeIn second" name="codigo_departamento" placeholder="Codigo de Departamento" onChange = {this.change} />
                        <input type="text" className="fadeIn second" name="nombre_departamento" placeholder="Nombre de Departamento" onChange = {this.change} />
                        <input type="text" className="fadeIn second" name="correo_departamento" placeholder="Correo de Departamento" onChange = {this.change} />
                        <input type="text" className="fadeIn second" name="telefono_departamento" placeholder="Telefono de Departamento" onChange = {this.change} />
                        <input type="password" className="fadeIn third" name="password" placeholder="Password" onChange = {this.change} />
                        <input type="submit" className="fadeIn fourth" value="Registrarse" onClick = {this.registrarse} />
                        </form>

                        <div id="formFooter">

                        </div>

                    </div>
                </div>
      </React.Fragment>  
      );
  }
}
