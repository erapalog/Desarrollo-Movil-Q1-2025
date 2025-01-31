import { createContext } from "react";

export const SaludoContext = createContext({
    nombre:'',
    ingresarNombre:(nombre:string) =>{},
})