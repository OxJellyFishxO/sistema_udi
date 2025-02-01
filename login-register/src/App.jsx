import './styles/tainwild/tainwild.css';
import RegisterPage from './pages/RegisterPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RegisterPage />} />       
            </Routes>
        </Router>
    )
}

export default App
