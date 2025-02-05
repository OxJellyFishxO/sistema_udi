import React from "react";
import { useMutation } from '@apollo/client';
import RegisterForm from "../components/RegisterForm";
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
    return (
            <div>
                <RegisterForm/>
            </div>
    )
};

export default RegisterPage;

