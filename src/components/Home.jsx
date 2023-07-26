import { useAuth } from "../context/authContext";

export function Home() {

  const {user, logout, loading} = useAuth();
  // const authContext = useContext(context)
  const handleLogout = async () =>{
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };

  if(loading) return(
    <div className="w-full max-w-xs m-auto">
      <form className="bg-white shadow-md rounded
        px-8 pt-6 pb-8 mb-4 w-96">
        <h1 className="mb-12">Loading</h1>
      </form>
    </div>
  ) 
  return(
    <div className="w-full max-w-xs m-auto">
      <form className="bg-white shadow-md rounded
        px-8 pt-6 pb-8 mb-4 w-96">
        <h1 className="mb-12">Bienvenido {user.displayName || user.email}</h1>
      <button onClick={handleLogout} className="bg-red-400 hover:bg-red-600 text-white font-bold
            py-2 px-4 rounded rounded-full focus:outline-none focus:shadow-outline">
          logout
      </button>
      </form>
    </div>
  ) 
}