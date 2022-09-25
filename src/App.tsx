import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainComponent from './components/app.component'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainComponent />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
