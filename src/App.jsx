import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Register } from "./components/Register";
import { AuthProvider } from "./context/authContext";
import './BackFondo.css';
import Navbar from './components/navbar';


function App() {
  return(
    <div className="BackFondo h-screen text-black flex">
      <AuthProvider>
        <Routes>
          <Route path="/" element=
          {
            <ProtectedRoute>
              <Navbar/>
            </ProtectedRoute>
          }
          />
          <Route  path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Home" element={<Home/>}/>
        </Routes>
      </AuthProvider>
    </div>
    
  );  
}

export default App