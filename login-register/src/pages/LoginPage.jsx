import React from "react";
import { useMutation } from '@apollo/client';
import LoginForm from "../components/loginForm";
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    return (
            <div>
                <LoginForm/>
            </div>
    )
};

export default LoginPage;
