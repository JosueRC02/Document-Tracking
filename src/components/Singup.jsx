import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import logo from '../assets/img/registrar.png';
import '../assets/css/inicios.css'
import {Apiurl} from '../services/ApiRest';
import axios from 'axios';
import SingupValidation from '../class/SingupValidation';

const SingupForm = () => {

   const navigate = useNavigate();
   const [errors, setErrors] = useState({});

    const [nombre_organizacion, setnombre_organizacion] = useState('');
    const [codigo_organizacion, setcodigo_organizacion] = useState('');
    const [area_negocio, setarea_negocio] = useState('');
    const [ubicacion, setubicacion] = useState('');
    const [telefono, settelefono] = useState('');
    const [password, setpassword] = useState('');
      
    const manejadorBtn = e => {
          e.preventDefault();
          setErrors(SingupValidation(nombre_organizacion, codigo_organizacion, area_negocio, ubicacion, telefono, password));
      }

  const registrarse = async () => {

    const datos = {nombre_organizacion:nombre_organizacion, codigo_organizacion:codigo_organizacion, area_negocio:area_negocio,     ubicacion:ubicacion, telefono:telefono, password:password}
    try {
        const response = await axios.post(`${Apiurl}/organizacion/singUpOrganizacion`, datos);
        console.log(response);
        console.log(response.data.status);
        alert("Registrado correctamente");
        navigate('/')
    } catch (error) {
        console.log("Error: ", error.response.data);
        return error;
    }
  }

    return (
        <div className="wrapper fadeInDown">
        <div id="formContent">

            <div className="fadeIn first">
                <br/><br/>
            <img src={logo} style={{width: '150px', marginLeft: '148px'}} alt="User Icon" />
                <br/><br/>
            </div>

            <form onSubmit = {manejadorBtn}>
            <input type="text" className="fadeIn second" name="nombre_organizacion" placeholder="Nombre de la Organizacion" onChange={(e) => setnombre_organizacion(e.target.value)} />
            {errors.nombre_organizacion && <p className = "error">{errors.nombre_organizacion}</p>}

            <input type="text" className="fadeIn second" name="codigo_organizacion" placeholder="Codigo de la Organizacion" onChange={(e) => setcodigo_organizacion(e.target.value)} />
            {errors.codigo_organizacion && <p className = "error">{errors.codigo_organizacion}</p>}

            <input type="text" className="fadeIn second" name="area_negocio" placeholder="Area Negocio de la Organizacion" onChange={(e) => setarea_negocio(e.target.value)} />
            {errors.area_negocio && <p className = "error">{errors.area_negocio}</p>}

            <input type="text" className="fadeIn second" name="ubicacion" placeholder="Ubicacion de la Organizacion" onChange={(e) => setubicacion(e.target.value)} />
            {errors.ubicacion && <p className = "error">{errors.ubicacion}</p>}

            <input type="text" className="fadeIn second" name="telefono" placeholder="Telefono de la Organizacion" onChange={(e) => settelefono(e.target.value)} />
            {errors.telefono && <p className = "error">{errors.telefono}</p>}

            <input type="password" className="fadeIn third" name="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
            {errors.password && <p className = "error">{errors.password}</p>}

            <input type="submit" className="fadeIn fourth" value="Registrarse" onClick={registrarse} />
            </form>

            <div id="formFooter">

            </div>

        </div>
    </div> 
      );
  }

export default SingupForm;
