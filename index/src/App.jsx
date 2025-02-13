import { useState } from 'react'
import IndexPage from './pages/IndexPage'
import './assets/styles/tailwind/tailwind.css'
import './assets/styles/style/style.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router'

function IndexApp() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<IndexPage />} ></Route>
                </Routes>
            </Router>
        </>
    )
}

export default IndexApp;
