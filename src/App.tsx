import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home.tsx';
import Abouts from './pages/Abouts.tsx';
import { BrowserRouter, Routes , Route } from "react-router-dom";
const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Abouts />} />
            <Route  path="*" element={<Home />}/>
        </Routes>
        </BrowserRouter>
    );
};


export default App;