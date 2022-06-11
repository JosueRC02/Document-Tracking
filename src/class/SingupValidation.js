const SingupValidation = (nombre_organizacion, codigo_organizacion, area_negocio, ubicacion, telefono, password) => {
    let error = {};

    if(!nombre_organizacion){
        error.nombre_organizacion = "El nombre de la organizacion es requerido."
    }
    if(!codigo_organizacion){
        error.codigo_organizacion = "Codigo de la organizacion es requerido."
    }
    if(!area_negocio){
        error.area_negocio = "El area de negocio es requerida."
    }
    if(!ubicacion){
        error.ubicacion = "La ubicacion de la organizacion es requerida."
    }
    if(!telefono){
        error.telefono = "El telefono de la organizacion es requerida."
    }else if(telefono.length < 8){
        error.telefono = "El telefono debe de ser de 8 digitos."
    }
    if(!password){
        error.password = "Contraseña es requerida."
    }else if(password.length < 8){
        error.password = "La contraseña debe tener más de 8 caracteres."
    }

    return error;
}

export default SingupValidation;