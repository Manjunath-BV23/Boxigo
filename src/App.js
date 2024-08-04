import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Moves from './pages/Moves';
import Navbar from './components/Navbar';
import './App.css';
import Profile from './pages/Profile';
import Quote from './pages/Quote';
import Logout from './pages/Logout';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Moves/>} />
                    <Route path="/profile" element={<Profile/>} />
                    <Route path="/getquote" element={<Quote/>} />
                    <Route path="/logout" element={<Logout/>} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
