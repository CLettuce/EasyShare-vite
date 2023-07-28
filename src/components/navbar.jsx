import React, {useState} from "react";
import BtnLogout from "./BtnLogout";


const Navbar = () => {
  let Links=[
    {name:"HOME", link:"/"},
    {name:"ACERCADE", link:"/"},
  ];
  return(
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-Roboto
        text-gray-800'>
            <span className="text-3xl text-indigo-600 mr-1 pt-2"></span>
            Easy Share
        </div>
        <ul className="md:flex md:items-center">
          {
            Links.map((link) =>(
              <li key={link.name} className="md:ml-8 text-xl">
                <a href={link.link} className="text-grey-800 hover:text-gray-400 duration-500" >{link.name}</a>
                
              </li>
            ))
          }
          <BtnLogout>Salir</BtnLogout>
        </ul>
      </div>
    </div>

  )
}
export default Navbar;