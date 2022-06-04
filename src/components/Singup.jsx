import React, { Component } from 'react'
import logo from '../assets/img/registrar.png';
import '../assets/css/inicios.css'
import {Apiurl} from '../services/ApiRest';
import axios from 'axios';

export default class Singup extends Component{

        state = {
          form:{
              "nombre_organizacion": "",
              "codigo_organizacion": "",
              "area_negocio": "",
              "ubicacion": "",
              "telefono": "",
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
        const response = await axios.post(`${Apiurl}/organizacion/singUpOrganizacion`,  this.state.form);
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
                        <input type="text" className="fadeIn second" name="nombre_organizacion" placeholder="Nombre de la Organizacion" onChange = {this.change} />
                        <input type="text" className="fadeIn second" name="codigo_organizacion" placeholder="Codigo de la Organizacion" onChange = {this.change} />
                        <input type="text" className="fadeIn second" name="area_negocio" placeholder="Area Negocio de la Organizacion" onChange = {this.change} />
                        <input type="text" className="fadeIn second" name="ubicacion" placeholder="Ubicacion de la Organizacion" onChange = {this.change} />
                        <input type="text" className="fadeIn second" name="telefono" placeholder="Telefono de la Organizacion" onChange = {this.change} />
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
