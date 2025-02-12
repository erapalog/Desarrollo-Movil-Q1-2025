import { View, Text } from 'react-native'
import React, { ReactNode, useContext, useState } from 'react'
import { ContexTarea } from '../Context/ContextTarea'
import { Tarea } from '../Modelos/Tarea';

interface ViewReact{
    children: ReactNode
} 

export default function TareaProvider({ children } : ViewReact) {

    const [tarea, setTarea] = useState<Tarea[]>([]);

    const agregarTarea = (text: string) => {
      const newTodo = { id: Date.now(), text };
      setTarea([...tarea, newTodo]);
    };


  return (

        <ContexTarea.Provider value={{tarea,agregarTarea}}>
            {children}
        </ContexTarea.Provider>
  )
}

export const useContextTarea = ()=>{
    return useContext(ContexTarea)
}