// 1. Usando use-axios-client
import React from 'react';
import { useForm } from 'react-hook-form';
import { useAxios } from 'use-axios-client';

const LoginFormWithUseAxios = () => {
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    const { data, error, loading, refetch } = useAxios({
        url: 'http://tu-api/login',
        method: 'POST'
    }, { manual: true });

    const onSubmit = async (formData) => {
        await refetch({
            data: formData
        });
    };

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <input
                        {...register("email", { 
                            required: "Email es requerido",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Email inválido"
                            }
                        })}
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border rounded"
                    />
                    {errors.email && (
                        <span className="text-red-500 text-sm">{errors.email.message}</span>
                    )}
                </div>

                <div>
                    <input
                        {...register("password", { 
                            required: "Contraseña es requerida",
                            minLength: {
                                value: 6,
                                message: "Mínimo 6 caracteres"
                            }
                        })}
                        type="password"
                        placeholder="Contraseña"
                        className="w-full p-2 border rounded"
                    />
                    {errors.password && (
                        <span className="text-red-500 text-sm">{errors.password.message}</span>
                    )}
                </div>

                <button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-500 text-white p-2 rounded disabled:bg-blue-300"
                >
                    {loading ? 'Cargando...' : 'Iniciar Sesión'}
                </button>
            </form>

            {error && (
                <div className="mt-4 p-2 bg-red-100 text-red-700 rounded">
                    Error: {error.message}
                </div>
            )}

            {data && (
                <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
                    ¡Login exitoso!
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

// 2. Usando axios normal
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const LoginFormWithAxios = () => {
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [response, setResponse] = React.useState(null);

    const onSubmit = async (formData) => {
        setLoading(true);
        setError(null);
        
        try {
            const result = await axios.post('http://tu-api/login', formData);
            setResponse(result.data);
            console.log('Respuesta:', result.data);
        } catch (err) {
            setError(err.response?.data || err.message);
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <input
                        {...register("email", { 
                            required: "Email es requerido",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Email inválido"
                            }
                        })}
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border rounded"
                    />
                    {errors.email && (
                        <span className="text-red-500 text-sm">{errors.email.message}</span>
                    )}
                </div>

                <div>
                    <input
                        {...register("password", { 
                            required: "Contraseña es requerida",
                            minLength: {
                                value: 6,
                                message: "Mínimo 6 caracteres"
                            }
                        })}
                        type="password"
                        placeholder="Contraseña"
                        className="w-full p-2 border rounded"
                    />
                    {errors.password && (
                        <span className="text-red-500 text-sm">{errors.password.message}</span>
                    )}
                </div>

                <button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-500 text-white p-2 rounded disabled:bg-blue-300"
                >
                    {loading ? 'Cargando...' : 'Iniciar Sesión'}
                </button>
            </form>

            {error && (
                <div className="mt-4 p-2 bg-red-100 text-red-700 rounded">
                    Error: {JSON.stringify(error)}
                </div>
            )}

            {response && (
                <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
                    ¡Login exitoso!
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default LoginFormWithAxios; // o LoginFormWithUseAxios