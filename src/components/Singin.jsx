import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import logo from '../assets/img/user.png';
import '../assets/css/inicios.css'
import {Apiurl} from '../services/ApiRest';
import axios from 'axios';
import SinginValidation from '../class/SinginValidation';

const SinginForm = () => {

    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const [codigo_organizacion, setcodigo_organizacion] = useState('');

    const [password, setPassword] = useState('');

    const manejadorBtn = e => {
        e.preventDefault();
        setErrors(SinginValidation(codigo_organizacion, password));
    };

    const inicioSesion = async () => {
        const datos = {codigo_organizacion: codigo_organizacion, password: password}
        try {
            const response = await axios.post(`${Apiurl}/organizacion/singInOrganizacion`, datos);
            console.log(response);
            console.log(response.data.status);
            console.log(response.data.message);
            navigate('/Dashboard');
        } catch (error) {
            console.log("Error: ", error.response.data);
            return error;
        }
    };

    return (
          <div className="wrapper fadeInDown">
            <div id="formContent">

            <div className="fadeIn first">
                <br/><br/>
            <img src={logo} style={{width: '150px', marginLeft: '148px'}} alt="User Icon" />
                <br/><br/>
            </div>

            <form onSubmit = {manejadorBtn}>
            <input type="text" className="fadeIn second" name= "codigo_organizacion" placeholder="Codigo de la Organizacion" onChange={(e) => setcodigo_organizacion(e.target.value)} />
            {errors.codigo_organizacion && <p className = "error">{errors.codigo_organizacion}</p>}

            <input type="password" className="fadeIn third" name="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} />
            {errors.password && <p className = "error">{errors.password}</p>}

            <input type="submit" className="fadeIn fourth" value="Iniciar Sesion" onClick = {inicioSesion} />
            </form>

            <div id="formFooter">
            <a className = "underlineHover" href= "Singup" >Registrarse?</a>
            </div>
            </div>
        </div> 
      );
  }

export default SinginForm;