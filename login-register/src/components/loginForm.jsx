import React from "react"
import {useForm} from "react-hook-form"

const LoginForm = () => {
    //Paramatros para utilizar el hook form React
    const {
        register,
        handleSubmit,
        setError,
        watch,
        formState: { errors }
    } = useForm();

    //Variables al enviar
    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('numPersona', data.numPersona);
        formData.append('passPersona', data.passPersona);

        alert(JSON.stringify(formData));

    };

    // Regresar el formulario
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/*Inicio de persona*/}
                <label>
                    <span>Número de Empleado</span>
                    <input
                        type="text" {
                            ...register(
                                "numPersona", {
                                    required: "Se requiere el número del empleado"
                                }
                            )
                        } 
                        placeholder="Número del empleado"
                    />
                    {errors.numPersona && (
                        <p>{errors.numPersona.message}</p>
                    )}
                </label>
                
                {/*Password*/}
                <label>
                    <span>Contraseña</span>
                    <input 
                        type="password" {
                            ...register(
                                "passPersona", {
                                    required:"Se requiere un correo valido"
                                }
                            )
                        }
                    />
                    {errors.passPersona && (
                        <p>{errors.passPersona.message}</p>
                    )}
                </label>
                
                <button 
                    className="submit"
                    type="submit" onClick={handleSubmit(onSubmit)}>
                    Iniciar Sesión
                </button>
            </form>
        </>
    );
};

export default LoginForm;