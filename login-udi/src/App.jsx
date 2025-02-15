import './assets/styles/tailwind/tailwind.css';
import './assets/styles/style/style.scss';
import React from "react";
import LoginPage from './pages/Loginpage';
import {BrowserRouter as Router, Routes, Route } from 'react-router';
import Homepage from './pages/Homepage';

function LoginPageUDI() {
    return (
        <Router>
            <div className={`container overflow-hidden relative mt-0 mx-auto mb-25 bg-white`}> 
                <div className="relative h-full form sign-in">
                    <h2 className='w-full text-3xl text-center'>¡Bienvenido!</h2>
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path='/home' element={<Homepage />}></Route>

                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default LoginPageUDI;
