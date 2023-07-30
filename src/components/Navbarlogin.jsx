import React, {useState} from "react";

const Navbarlogin = () => {
  let Links=[
    {name:"Registrase", link:"/Register"},
  ];
  let [open, setOpen]=useState(false);
  return(
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-Roboto
        text-gray-800'>
            <span className="text-3xl text-indigo-600 mr-1 pt-2"></span>
            Easy Share
        </div>
        <div onClick={()=> setOpen(!open)} className="text-3xl absolute
        right-8 top-6 cursor-pointer md:hidden">
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul className={`md:flex md:items-center md:pb-0
        pb-12 absolute md:static bg-white md:z-auto z-(-1)
        left-0 w-full md:w-auto md:pl-0 pl-9 transition-all
        duration-500 ease-in ${open ? 'top-20 opacity-100':'top-(-490px)'} md:opacity-100
         opacity-0`}>
          {
            Links.map((link) =>(
              <li key={link.name} className="md:ml-8 text-xl md:my-0
              my-7">
                <a href={link.link} className="bg-indigo-600 text-white font-bold font-roboto py-2 
                px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500" >{link.name}</a>
                
              </li>
            ))
          }
          
        </ul>
      </div>
    </div>

  )
}
export default Navbarlogin;