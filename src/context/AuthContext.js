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

  const singUp = async (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const logOut = async () => signOut(auth);

  const loginWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  useEffect(() => {
    const unSuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSuscribe();
  }, []);

  return (
    <authContext.Provider
      value={{
        user,
        login,
        loading,
        singUp,
        logOut,
        loginWithGoogle,
        resetPassword,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
