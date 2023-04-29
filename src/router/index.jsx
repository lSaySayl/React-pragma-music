import { createBrowserRouter } from "react-router-dom";


import Registro from "../pages/Registro";
import Login from "../pages/Login";
import Inicio from "../pages/Inicio";
import ListadoM from "../pages/ListadoM";
import ListadoF from "../pages/ListadoF";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/registro",
    element: <Registro/>
  },
  {
    path: "/inicio",
    element: <Inicio/>
  },
  {
    path: "/listadom",
    element: <ListadoM/>

  },
  {
    path: "/listadof",
    element: <ListadoF/>
  }
]);
