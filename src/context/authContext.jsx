import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
} from "firebase/auth";
import { auth } from "../firebase";

export const authContext = createContext();

export const useAuth = () => {
   const context = useContext(authContext);
   if(!context) throw new Error('There is not auth provider');
   return context;
};

export function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const [currentUser, setCurrentUser] = useState(null);

    const signup = (email, password) => 
    createUserWithEmailAndPassword(auth, email, password);

    const login = async (email, password) => 
    signInWithEmailAndPassword(auth, email, password);

    const logout = () => signOut(auth);

    const loginWithGoogle = () => {
      const googleProvider = new GoogleAuthProvider()
      return signInWithPopup(auth, googleProvider)
    };

    const resetPassword = (email) => sendPasswordResetEmail (auth, email);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (Usuario) => {
          setCurrentUser(Usuario);
          setUser(Usuario);
          setLoading(false)
        //   console.log(Usuario);
        });
        return () => unsubscribe();
      }, []);

    return(
    <authContext.Provider value={{ currentUser, signup, login, user, logout, loading, loginWithGoogle, resetPassword }}>
        {children}
    </authContext.Provider>
    );
}
