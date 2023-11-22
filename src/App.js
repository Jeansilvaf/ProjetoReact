// src/App.js

import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Cadastro from "./Cadastro";
import Login from "./Login";
import React from 'react';
import './App.css';
import AuthStore from "./AuthStore";
import { observer } from "mobx-react-lite";


const App = observer(()=>{ 
  return (
  <Router>
    <NavBar />
    <Routes>
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={AuthStore.isAuthenticade? <Home/> : <Login/>} />

    </Routes>


  </Router>

)
})


export default App;
