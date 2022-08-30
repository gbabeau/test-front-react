import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Abouts from './pages/Abouts';

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