// Los estados no se exportan ni se importan, se pueden pasar por props para trabajar con el.
const validation = (userData) => {
    // Inicializamos un objeto que será el que retornará la función
    const errors = {};
    //VALIDACIONES EMAIL
    //validación estructura email
    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userData.email)){
        errors.email = '❗El correo ingresado no es válido';
    }
    if(!userData.email){
        errors.email = '❗Ingresa tu correo electrónico';
    }

    //VALIDACIONES PASSWORD
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = '❗La contraseña debe tener al menos un número';
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = '❗La contraseña debe ser de mínimo 6 caracteres';
    }
    
    return errors;
}

export default validation;