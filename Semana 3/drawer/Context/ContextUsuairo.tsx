import { createContext } from "react";
import { Usuario } from "../Modelos/Usuario";


export const ContextUsuario = createContext({
    nombre:'',
    apellido:'',
    correo:'',
    telefono:'',
    listaUsuario: [] as Usuario[],
    agregarUsuario: ()=>{},
    setNombre: (nombre:string) =>{},
    setApellido: (apellido:string) =>{},
    setTelefono: (telefono:string) =>{},
    setCorreo: (correo:string) =>{},
})