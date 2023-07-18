const validation = (userData) => {
    const errors = {};
    //VALIDACIONES EMAIL
    //validación estructura email
    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userData.email)){
        errors.email = '❗El correo ingresado no es válido';
    }
    //validación campo vacío
    if(!userData.email){
        errors.email = '❗Ingresa tu correo electrónico';
    }
    //validación caracteres deben ser máximo 35
    if(userData.email.length > 35){
        errors.email = '❗El correo electrónico debe tener máximo 35 caracteres';
    }

    //VALIDACIONES PASSWORD
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = '❗La contraseña debe contener al menos un número';
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = '❗La contraseña debe ser de mínimo 6 y máximo 10 caracteres';
    }

    return errors;
}

export default validation;