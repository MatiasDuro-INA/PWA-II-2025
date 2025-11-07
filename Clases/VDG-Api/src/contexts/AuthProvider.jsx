import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// CreateContext me crea el contexto
// Cuando hablamos de contexto, hablamos de el cerebro que le va a pasar
// A todos los componentes que sean sus hijos, va a proveer lo que nosotros querramos
const AuthContext = createContext()

// el useContext se usa para decir, usa un contexto, y el parametro es el contexto que creamos
// el useAuth va a ser nuestra antena, para llamar al contexto, donde nosotros querramos
export const useAuth = () => useContext(AuthContext)


export default function AuthProvider({children}) {

    const [user, setUser] = useState(null)
    const [autenticado, setAutenticado] = useState(false)

    const navigate = useNavigate()

    const BaseDeDatos = [
      {
        email: "matias@gmail.com",
        password: "123"
      }
    ]

    const login = (userData) => {

      console.log("userData: ", userData);

      const usuarioEncontrado = BaseDeDatos.find( usuario => usuario.email === userData.email && usuario.password === userData.password)
      
      if(usuarioEncontrado){
        setUser(userData)
        setAutenticado(true)
        navigate("/")
      }else{
        setAutenticado(false)
        return { error: "Usuario o Password incorrectos"}
      }

    }


    


// Provider = Proveer
// El AuthContext.Provider va a proveer a sus children, con lo que querramos
  return (
    <AuthContext.Provider value={{user, autenticado, login}}>
        {children}
    </AuthContext.Provider>
  )
}
