import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Jugar from './pages/Jugar'
import Contact from './routes/Contact'
import Registrarse from './pages/Registrarse'
import VocalContextMain from './context/VocalContextMain'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
}from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: "/",
    element:  <App /> ,
  },
  {
    path: "/jugar",
    element:  <Jugar/> ,
  },
  {
    path:"contacts/:contactId",
    element:<Contact/>
  },
  {
    path: "/registrarse",
    element:  <Registrarse/> ,
  }
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
 
  <React.StrictMode>
    <VocalContextMain>
     <RouterProvider router={router} />
     </VocalContextMain>
  </React.StrictMode>,
)
