import FooterPage from './pages/FooterPage'
import './styles/tailwind/tailwind.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router'

function FooterApp() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<FooterPage />}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default FooterApp
