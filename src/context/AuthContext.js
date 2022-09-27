import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";

export const authContext = createContext();

// hook que retorna el context o msj de error
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("No hay auth provider");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  useEffect(() => {
    const unSuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSuscribe();
  }, []);
  return (
    <authContext.Provider value={{ user, login }}>
      {children}
    </authContext.Provider>
  );
}
