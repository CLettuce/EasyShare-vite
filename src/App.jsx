import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Register } from "./components/Register";
import { AuthProvider } from "./context/authContext";
import './BackFondo.css';

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
          <Route  path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
        </Routes>
      </AuthProvider>
    </div>
    
  );  
}

export default App