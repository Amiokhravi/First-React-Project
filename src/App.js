import React, {useState, useEffect} from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import {BrowserRouter, Switch, Routes, Route} from "react-router-dom";

//Cmps

import Header from "./component/Header.jsx";

//Css

import "./App.css";

//Pages

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import AdvanceSearch from "./pages/Advance_Search.jsx";
import Footer from "./component/Footer.jsx";
import About from "./pages/About.jsx";
import Signup from "./pages/Signup.jsx";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/AdvanceSearch" element={<AdvanceSearch/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="/Signup" element={<Signup/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
