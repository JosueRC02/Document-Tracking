const SinginValidation = (codigo_organizacion, password) => {
    let error = {};

    if(!codigo_organizacion){
        error.codigo_organizacion = "Codigo de la organizacion es requerido."
    }
    if(!password){
        error.password = "Contraseña es requerida."
    }else if(password.length < 8){
        error.password = "La contraseña debe tener más de 5 caracteres"
    }

    return error;
}

export default SinginValidation;