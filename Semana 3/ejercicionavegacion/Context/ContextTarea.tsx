import { createContext } from "react";
import {Tarea} from '../Modelos/Tarea'

export const ContexTarea= createContext({
    tarea:[]  as Tarea[],
    agregarTarea: (text: string) => {}
})