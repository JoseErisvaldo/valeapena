import supabase from "@/lib/supabase";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(); // Export AuthContext

export default function AuthProvider({ children }) { 
  const [user, setUser] = useState()
  const navigate = useNavigate()
  
  useEffect(() => {
    const local = localStorage.getItem('sb-cszkwzkgaeklahwnahhw-auth-token')
    const string = JSON.parse(local)
    if(local) {
      setUser(string)
    }
   
  },[])
  
  async function Login(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    setUser(data)
    navigate('/')
    console.log(data);
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut()

  }

  return (
    <AuthContext.Provider value={{ Login, signOut, autenticado: user, user }}> 
      {children}
    </AuthContext.Provider>
  );
}
