import { useAuth } from "../context/authContext";
import Navbar from "./navbar";

export function CrearSala() {
  let Links=[
    {name:"Crear", link:"/SalaCreada"},   
  ];
  let Links1=[
    {name:"Cancelar", link:"/"},
  ]; 
  return (
    <div className="w-full max-w-xs m-auto ">
      <Navbar />
      <div className="px-0 pt-6 pb-8 mb-4 font-sans">
        <div className="text-center font-bold mb-4 text-[25px]">
          Configura y Crea tu Sala
        </div>
        <form className="bg-gray-300 shadow-md rounded
        px-8 pt-6 pb-8 mb-4">
          <div className="mb-4 font-bold">
            Nombre de Usuario
          </div>
          <div class="flex mb-4">
            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
              </svg>
            </span>
            <input type="text" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 
            border text-gray-900 focus:ring-blue-500 focus:border-blue-500 
            block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
            dark:focus:border-blue-500" placeholder="Username">
              
            </input>
          </div>
          <div className="mb-4 font-bold">
            Estado de privacidad
          </div>
          <div class="flex items-center mb-4">
            <input id="default-checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="checkbox" />
            <label for="default-checkbox" className="ml-2 text-sm font-medium text-gray-700 dark:text-black">Pública</label>
          </div>
          <div class="flex items-center mb-4">
            <input id="default-checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="checkbox" />
            <label for="default-checkbox" className="ml-2 text-sm font-medium text-gray-700 dark:text-black">Invitación</label>
          </div>
          <div class="flex items-center mb-4">
            <input id="default-checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="checkbox" />
            <label for="default-checkbox" className="ml-2 text-sm font-medium text-gray-700 dark:text-black">Privada</label>
          </div>
          <div>
          <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold 
            py-2 px-8 border-b-4  rounded">
                {
                  Links.map((link) =>(
                
                    <a href={link.link}>{link.name}</a>
                  
                ))
              }
          </button>
          <button class="hover:bg-red-400 text-black font-bold 
          py-2 px-8 ">
            {
                Links1.map((link) =>(
              
                  <a href={link.link}>{link.name}</a>
                
              ))
            }

          </button>
          </div>
          
        </form>
      
      </div>
    </div>
  );
}
