import React from "react";
import { useMutation } from '@apollo/client';
import RegisterForm from "../components/RegisterForm";
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
    return (
        <div className="isolate md:isolation-auto px-5 py-5 sm:py-10 lg:px-10">
            <div>
                <h1 className="text-5xl">Registro</h1>
                <RegisterForm/>
            </div>
        </div>
    )
};

export default RegisterPage;

