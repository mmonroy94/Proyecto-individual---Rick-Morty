import React from "react";
import { useState } from "react";
import validation from "../validation/validation";
import styles from './Form.module.css';

const Form = ({login}) => {
    const [userData, setUserData] = useState ({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})
    
    //se va a agregar a cada uno de los inputs con el fin de estar atento a un evento de cambio, de esta manera le indicamos al estado que será igual al input
    // setUserData retorna un objeto, hace copia del objeto existente y adiciona la nueva información recibida en el input
    // se trae event.target.name con bracket notation porque es una propiedad del objeto que es variable y no se cual es, esto me permite aplicarla en varios inputs y no tener que crear una función por cada input existente en el form
    const handleOnChange = (event) => {
        setUserData({
            ...userData, [event.target.name] : event.target.value
        })

        setErrors(validation({
            ...userData, [event.target.name]: event.target.value
        })
    )}

    const handleOnSubmit = (event) => {
        event.preventDefault(); //evita que la pagina se recargue y se pierda la info
        login(userData);
    }

    return(
        <div className={styles.loginBox}>
            <h2>Te damos la bienvenida!</h2>
            <form onSubmit={handleOnSubmit}>
                <div className={styles.userBox}>
                    <input name='email' type='email' value={userData.email} onChange={handleOnChange}/>
                    <label>Correo electrónico</label>
                    {errors.email && <p>{errors.email}</p>}
                </div>

                <div className={styles.userBox}>
                    <input name='password' type='password' value={userData.password} onChange={handleOnChange}/>
                    <label htmlFor='password'>Contraseña</label>
                    {errors.password && <p>{errors.password}</p>}
                </div>

                <button disabled={!userData.email||!userData.password||errors.email||errors.password}>Iniciar sesión</button>
                <button>Registrarme</button>
            </form>
        </div>
    )
}

export default Form;