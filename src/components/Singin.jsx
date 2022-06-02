import React, { Component } from 'react'
import logo from '../assets/img/user.png';
import '../assets/css/inicios.css'

export default class Singup extends Component{

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
                        <input type="password" className="fadeIn third" name="password" placeholder="Password" onChange = {this.change} />
                        <input type="submit" className="fadeIn fourth" value="Iniciar Sesion" onClick = {this.inicioSesion} />
                        </form>

                        <div id="formFooter">

                        </div>

                    </div>
                </div>
      </React.Fragment>  
      );
  }
}