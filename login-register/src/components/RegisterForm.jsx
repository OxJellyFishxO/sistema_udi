import React from "react"
import {useForm} from "react-hook-form"

const RegisterForm = () => {
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
        formData.append('correoPersona', data.correoPersona);
        formData.append('pdfArchivo', data.pdfArchivo[0]);

        alert(JSON.stringify(formData));

    };

    // Regresar el formulario
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/*Registro numero de empleado*/}
                <label>Número de Empleado</label>
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

                {/*Registro del correo*/}
                <label>Correo Electrónico</label>
                <input 
                    type="email" {
                        ...register(
                            "correoPersona", {
                                required:"Se requiere un correo valido"
                            }
                        )
                    }
                />
                {errors.correoPersona && (
                    <p>{errors.numPersona.message}</p>
                )}

                {/** Registro del documento */}
                <label>Subir Archivo</label>
                <input
                    type="file" {
                        ...register(
                            "pdfArchivo", {
                                required:"Favor de subir archivo"
                            }
                        )
                    }
                />
                {errors.pdfArchivo && (
                    <p>{errors.pdfArchivo.message}</p>
                )}

                <button 
                    className="submit"
                    type="submit" onClick={handleSubmit(onSubmit)}>
                    Registrar
                </button>
            </form>
        </>
    );
};

export default RegisterForm;