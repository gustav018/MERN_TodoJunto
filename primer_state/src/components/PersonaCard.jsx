import { useState } from "react"

const PersonaCard = () => {
 
    const [contador, SetContador]=useState(0)
    const subirContador=()=>{
        SetContador(contador+1);
    }
 
    
  return (
    <div onClick={subirContador}>Contador : {contador}.
    <h1>hola</h1>
    </div>
    
  )
}

export default PersonaCard