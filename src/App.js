import React from "react";
import { Navbar } from "./Components/UI/Navbar/Navbar";
import AppRouter from "./Components/AppRouter";
import "./Styles/App.css"
import { AuthContext } from "./context/context";
import { useState } from "react";
import { useEffect } from "react";

function App() {
      const [isAuth,setIsAuth] = useState(false)
      const [isLoading] = useState(true)

      useEffect(()=> {
          if(localStorage.getItem('auth')) {
            setIsAuth(true)
          }
      },[])
      return (
        
        <AuthContext.Provider value={{
          isAuth,
          setIsAuth,
          isLoading
        }}>
        <Navbar />
        <AppRouter/>
        </AuthContext.Provider>
      )
}

export default App;
