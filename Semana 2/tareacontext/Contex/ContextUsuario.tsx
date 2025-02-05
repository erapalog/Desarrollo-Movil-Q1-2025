import { createContext } from "react";

//mi plantilla de definiciones , solo se definen los metodos que yo voy a utilizar
export const ContextUsuario = createContext({
    listaUsuario: [],
    setListaUsuario: ([]) => {} 
})