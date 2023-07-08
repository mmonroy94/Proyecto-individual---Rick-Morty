import React from "react";
import { useState } from "react";

const Form = () => {
    const [form, setForm] = useState ({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })
    
    const handleOnChange = (event) => {
        setForm({
            ...form, [event.target.name]:event.target.value})
        validate()
    }

    const validate = () => {
        if(form.email){
            if(!/^\S+@\S+\.\S+$/.test(form.email)){
                setErrors({
                    ...errors, email: 'Ingresa un email valido'
                })}else{
                    setErrors({...errors, email: ''})
                }
        } else if(form.password){
            if(!/^\S+@\S+\.\S+$/.test(form.password)){
                setErrors({
                    ...errors, password: 'Porfavor revisa tu contraseña, debe tener al menos 8 caracteres y un carácter especial'
                })}else{
                    setErrors({...errors, password: ''})
            }
        }     
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
    }

    return(
        <div>
            <form onSubmit={handleOnSubmit}>
                <h1>Soy el form de bienvenida</h1>
                <div>
                    <label htmlFor='email'>Correo electrónico: </label>
                    <input name='email' type='email' value={form.email} onChange={handleOnChange}/>
                    {errors.email && <p>{errors.email}</p>}
                </div>

                <div>
                    <label htmlFor='password'>Contraseña: </label>
                    <input name='password' type='password' value={form.password} onChange={handleOnChange}/>
                    {errors.password && <p>{errors.password}</p>}
                </div>

                <button disabled={!form.email||!form.password||errors.email||errors.password}>Iniciar sesión</button>
            </form>
        </div>
    )
}

export default Form;