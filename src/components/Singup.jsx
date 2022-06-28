import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import logo from '../assets/img/registrar.png';
import '../assets/css/singup.css'
import {Apiurl} from '../services/ApiRest';
import axios from 'axios';
import SingupValidation from '../class/SingupValidation';
import Swal from 'sweetalert2';

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

    const datos = {nombre_organizacion:nombre_organizacion, codigo_organizacion:codigo_organizacion, area_negocio:area_negocio, ubicacion:ubicacion, telefono:telefono, password:password}
    try {
        const response = await axios.post(`${Apiurl}/organizacion/singUpOrganizacion`, datos);
        console.log(response);
        console.log(response.data.status);
        Swal.fire({
            text: 'Datos ingresados correctamente',
            showConfirmButton: false,
            icon: 'success',
            timer: 1500
          })
        navigate('/')
    } catch (error) {
        console.log("Error: ", error.response.data);
        Swal.fire({
            icon: 'error',
            text: 'Datos ingresados de manera incorrecta',
            showConfirmButton: false,
            timer: 1500
          })
        return error;
    }
  }
     return (
    <div id = "body">
        <div className="container">
            <div className="title">
            <img src={logo} style={{width: '110px', marginLeft: '570px'}} alt="User Icon" />
            </div>
                <form onSubmit = {manejadorBtn}>
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Nombre de la organizacion</span>
                            <input type="text" placeholder='Ingrese el nombre de la organizacion' onChange={(e) => setnombre_organizacion(e.target.value)} />
                            {errors.nombre_organizacion && <p className = "error">{errors.nombre_organizacion}</p>}
                        </div>

                        <div className="input-box">
                            <span className="details">Codigo de la organizacion</span>
                            <input type="text" placeholder='Ingrese el codigo de la organizacion' onChange={(e) => setcodigo_organizacion(e.target.value)} />
                            {errors.codigo_organizacion && <p className = "error">{errors.codigo_organizacion}</p>}
                        </div>

                        <div className="input-box">
                            <span className="details">Area de negocio</span>
                            <input type="text" placeholder='Ingrese el area de negocio' onChange={(e) => setarea_negocio(e.target.value)} />
                            {errors.area_negocio && <p className = "error">{errors.area_negocio}</p>}
                        </div>

                        <div className="input-box">
                            <span className="details">Ubicacion de la organizacion</span>
                            <input type="text" placeholder='Ingrese la ubicacion de la organizacion' onChange={(e) => setubicacion(e.target.value)} />
                            {errors.ubicacion && <p className = "error">{errors.ubicacion}</p>}
                        </div>

                        <div className="input-box">
                            <span className="details">Telefono de la organizacion</span>
                            <input type="text" placeholder='Ingrese el telefono de la organizacion' onChange={(e) => settelefono(e.target.value)} />
                            {errors.telefono && <p className = "error">{errors.telefono}</p>}
                        </div>

                        <div className="input-box">
                            <span className="details">Contraseña </span>
                            <input type="password" placeholder='Ingrese el nombre de la organizacion' onChange={(e) => setpassword(e.target.value)} />
                            {errors.password && <p className = "error">{errors.password}</p>}
                        </div>

                    </div>
                    <div className = "button">
                    <input type="submit" className="details" value="Registrarse" onClick={registrarse} />
                    </div>
                </form>
            </div>
        </div>
    );
  }

export default SingupForm;
