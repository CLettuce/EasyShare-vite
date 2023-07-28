import { useState } from "react";
import {useAuth} from "../context/authContext"
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";

export function Register() {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const {signup} = useAuth ();
  const navigate = useNavigate();
  const [error, setErrror] = useState();

  const handleChange = ({ target: {name, value} }) =>{
    setUser ({...user, [name]: value});
    // console.log(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrror('')
    try{
      await signup(user.email, user.password);
      navigate('/');
    }catch(error){
      console.log(error.code);
      if(error.code === "auth/missing-password"){
        setErrror ('Escriba una contraseña')
      }
      else if(error.code === "auth/missing-email"){
        setErrror ('Escriba su correo')
      }
      else if(error.code === "auth/weak-password"){
        setErrror ('La contraseña debe contener al menos 6 caracteres')
      }
      else if(error.code === "auth/invalid-email"){
        setErrror ('Correo Invalido')
      }
      else if(error.code === "auth/email-already-in-use"){
        setErrror ('Ya esta registrado con este correo')
      }
      // setErrror(error.message);
    }
    
  }

  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error}/>}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded
      px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm 
          font-fold mb-2">Email</label>
          <input 
            className="shadow appearance-none border rounded w-full
            py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" 
            name="email" 
            placeholder="email@correo.com" 
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm 
          font-fold mb-2">Password</label>
          <input 
            className="shadow appearance-none border rounded w-full
            py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password" 
            name="password" 
            id="password" 
            onChange={handleChange}
            placeholder="**********"
          />
        </div>
        <div className="mb-4">
         
          <div className="flex items-center justify-between">
            <button className="bg-blue-400 hover:bg-blue-600 text-white font-bold
            py-2 px-4 text-sm rounded rounded focus:outline-none focus:shadow-outline"
            >Registrar</button>

            
          </div>
          

        </div>
      </form>
      <p className="my-4 text-sm flex text-white justify-between px-3">
        Regresar al Login<Link to='/Login' className="text-blue-600">Click Aquí</Link>
      </p>
    </div>
  )
}
