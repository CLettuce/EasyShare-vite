import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Register } from "./components/Register";
import { AuthProvider } from "./context/authContext";
import './BackFondo.css';
import Navbar from './components/navbar';
import { CrearSala } from './components/CrearSala';
import { UnirseSala } from './components/UnirseSala';
import { SalaCreada } from './components/SalaCreada';


function App() {
  return(
    <div className="BackFondo h-screen text-black flex">
      <AuthProvider>
        <Routes>
          <Route path="/" element=
          {
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          }
          />
          <Route path="/CrearSala" element=
          {
            <ProtectedRoute>
              <CrearSala/>
            </ProtectedRoute>
          }
          />
          <Route path="/UnirseSala" element=
          {
            <ProtectedRoute>
              <UnirseSala/>
            </ProtectedRoute>
          }
          />
          <Route path="/SalaCreada" element=
          {
            <ProtectedRoute>
              <SalaCreada/>
            </ProtectedRoute>
          }
          />
          
          <Route  path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Navbar" element={<Navbar/>}/>
        </Routes>
      </AuthProvider>
    </div>
    
  );  
}

export default App