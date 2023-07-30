import { useAuth } from "../context/authContext";
import Navbar from "./navbar";

export function Home() {
  let Links=[
    {name:"Crear una sala para recibir archivos", link:"/CrearSala"},   
  ];
  let Links1=[
    {name:"Únete a una sala para enviar archivos", link:"/UnirseSala"},
  ];
  const { user } = useAuth();
  return (
    <div  className="w-full max-w-xs m-auto">
      <Navbar />

      <form className="bg-white shadow-md border-b-4 border-blue-700 
      hover:border-blue-500 rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="mb-0 font-bold text-center">Bienvenido <a className="text-red-500">{user.displayName || user.email}</a> </h1>
      </form>

      <div className="px-0 pt-6 pb-8 mb-4">
      <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold 
      py-2 px-8 border-b-4 border-blue-700 
      hover:border-blue-500 rounded">
          {
            Links.map((link) =>(
           
              <a href={link.link}>{link.name}</a>
            
          ))
        }
      </button>
      
      <h1 className="text-black text-xl font-fold mb-2 py-2 px-8 mb-0 text-center">ó</h1>

      <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold 
      py-2 px-8 border-b-4 border-blue-700 
      hover:border-blue-500 rounded">
        {
            Links1.map((link) =>(
           
              <a href={link.link}>{link.name}</a>
            
          ))
        }

      </button>
      </div>
    </div>
  );
}
