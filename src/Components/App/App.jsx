import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './../Home/Home';
import About from './../About/About';
import Projects from './../Projects/Projects';
import Skill from './../Skill/Skill';
import Contact from './../Contact/Contact';

import './App.css';
import NavBar from './../NavBar/NavBar';
import GoHome from './../GoHome/GoHome';

const App = () => {
    return (
        <div>
            <HashRouter>
                <div>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/about' element={<About/>} />
                        <Route path='/projects' element={<Projects/>} />
                        <Route path='/skills' element={<Skill/>} />
                        <Route path='/contact' element={<Contact/>} />
                    </Routes>
                    <GoHome />
                </div>
            </HashRouter>
        </div>
    );
};

export default App;