import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';

export default function RutasProtegidas({children}) {

    console.log("Checkeando login...");
    
    const { autenticado } = useAuth()

    const location = useLocation()

    if(!autenticado){

        console.log("No estas logeado...");
        console.log("Redirigiendo a Login...");
        
        
        return (
        <Navigate
            to={"/login"}
            replace
            state={{ from: location}}
        />
    )}

    console.log("Pasa de largo");
    
  return children
}
