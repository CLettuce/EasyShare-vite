import React from "react"
import { useAuth } from "../context/authContext";

const BtnLogout = (props) => {
    const { logout } = useAuth();
  
    const handleLogout = async () => {
      try {
        await logout();
      } catch (error) {
        console.error(error);
      }
    };
    return (
        <button
          onClick={handleLogout}
          className="bg-indigo-600 text-white font-bold font-roboto py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500"
        >
          {props.children}

        </button>
    );
};
    
export default BtnLogout;