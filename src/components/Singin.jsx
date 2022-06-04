import React, { Component } from 'react'
import logo from '../assets/img/user.png';
import '../assets/css/inicios.css'
import {Apiurl} from '../services/ApiRest';
import axios from 'axios';

export default class Singup extends Component{

    state = {
        form:{
            "codigo_organizacion": "",
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

    inicioSesion = async () => {
        try {
            console.log(this.state.form);
            const response = await axios.post(`${Apiurl}/organizacion/singInOrganizacion`,  this.state.form);
            console.log(response);
            console.log(response.data.status);
            console.log(response.data.message);
            alert("Credenciales correctas");
            console.log(this.props.history.push("/Dashboard"));
            window.location.reload(true);
        } catch (error) {
            alert("Credenciales incorrectas");
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
            <input type="text" className="fadeIn second" name="codigo_organizacion" placeholder="Codigo de la Organizacion" onChange = {this.change} />
            <input type="password" className="fadeIn third" name="password" placeholder="Password" onChange = {this.change} />
            <input type="submit" className="fadeIn fourth" value="Iniciar Sesion" onClick = {this.inicioSesion} />
            </form>

            <div id="formFooter">
                <a className="underlineHover" href="Singup">Registrarse?</a>
            </div>

            </div>

        </div>
      </React.Fragment>  
      );
  }
}