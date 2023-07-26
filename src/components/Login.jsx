import { useState } from "react";
import {useAuth} from "../context/authContext"
import { useNavigate } from "react-router-dom";
import { Alert } from "./Alert";
import logo from './logo.jpg';

export function Login() {
  
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const {login, loginWithGoogle} = useAuth ();
  const navigate = useNavigate();
  const [error, setErrror] = useState();
  // cargar o actualizar el dato
  const handleChange = ({ target: {name, value} }) =>{
    setUser ({...user, [name]: value});
    // console.log(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrror('')
    try{
      await login(user.email, user.password);
      navigate('/');
    }catch(error){
      // console.log(error.code);
      if(error.code === "auth/invalid-email"){
        setErrror ('Escriba un Correo Válido')
      }
      else if(error.code === "auth/missing-password"){
        setErrror ('Escriba su Contraseña')
      }
      else if(error.code === "auth/wrong-password"){
        setErrror ('La Contraseña es Incorrecta')
      }
      else if(error.code === "auth/user-not-found"){
        setErrror ('Este Correo no Existe')
      }
      // setErrror(error.message);
    }
    
  }
  const handleGooogleSignin = async () =>{
    try{
      await loginWithGoogle();
      navigate("/");
    } catch (error){
      setErrror(error.message)
    }
    
  }
  return (
      <div className="w-full max-w-xs m-auto">
        


        {/* <div className="mb-6 text-center font-roboto text-white font-bold">
            <div className="flex justify-center">
              <img 
              src={logo} 
              alt="logo"
              className="mx-auto h-14 w-auto" 
              />
            </div>
        </div> */}

          
        {/* <form className="bg-gray-600 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
          Motor de Unificacion de persona biometricas
        </form> */}
        <div className="text-center text-[50px] font-roboto font-extrabold text-gray-700 mb-16 ">
            EasyShare
        </div>
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

            <a href="!#" className="inline-block align-baseline font-blod 
            text-sm text-blue-500 hover:text-blue-800">Restablecer Contraseña</a>
          </div>
          

        </div>
      </form>
        <button onClick={handleGooogleSignin} className="bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-grya-300 py-2 px-4 w-full">
        Login with Google
        </button>
      </div>
  )
}
