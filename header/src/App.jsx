import './assets/styles/tailwind/tailwind.css';
import './assets/styles/style/style.css';
import "@fontsource/red-hat-display";
import {BrowserRouter as Router, Routes, Route} from 'react-router';
import HeaderPage from './pages/headerpage';

function HeaderApp() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element = {<HeaderPage />}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default HeaderApp
