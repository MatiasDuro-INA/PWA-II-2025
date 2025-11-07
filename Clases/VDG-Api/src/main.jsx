import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicio from './screen/inicio/Inicio.jsx';
import Productos from './screen/productos/Productos.jsx';
import Contacto from './screen/contacto/Contacto.jsx';
import Carrito from './screen/carrito/Carrito.jsx';
import Login from './screen/login/Login.jsx';
import RutasProtegidas from './components/RutasProtegidas/RutasProtegidas.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RutasProtegidas>
        <Inicio />
      </RutasProtegidas>
    ),
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/productos",
    element: (
      <RutasProtegidas>
        <Productos />
      </RutasProtegidas>
  )
  },
  {
    path: "/contacto",
    element: (
      <RutasProtegidas>
        <Contacto />
      </RutasProtegidas>
  )
  },
  {
    path: "/Carrito",
    element: (
      <RutasProtegidas>
        <Carrito />
      </RutasProtegidas>
  )
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)




