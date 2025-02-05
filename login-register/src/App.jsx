import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/tainwild/tainwild.css'
import './styles/style/style.scss'

function App() {
    return (
        <Router>
            <div className="container overflow-hidden relative mt-0 mx-auto mb-25 bg-white"> 
                <div className="relative h-full form sign-in">
                    <h2 className='w-full text-3xl text-center'>¡Bienvenido!</h2>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                    </Routes>
                </div>

                <div className='sub-cont'>
                    <div className='img'>
                        <div className='img__text m--up'>
                            <h2 className='w-full text-3xl text-center'>¿Aún no te registras?</h2>
                            <p> Por favor dar click en Registrarse para poder generar una cuenta</p>
                        </div>

                        <div className='img__text m--in'>
                            <h2 className='w-full text-3xl text-center'>¿Eres parte de la comunidad?</h2>
                            <p>Si ya tienes una cuenta, simplemente inicia sesión</p>
                        </div>

                        <div class="img__btn">
                            <span class="m--up">Registrarse</span>
                            <span class="m--in">Iniciar Sesión</span>
                        </div>
                    </div>

                    <div className="relative h-full form sign-up">
                        <h2 className='w-full text-3xl text-center'>Crear Cuenta</h2>
                        <Routes>
                            <Route path="/" element={<RegisterPage />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default App
