// Funcional Component rafc
//mi primera creacion esta es la base, Paso 1

import { useState } from "react"


export const CounterApp = () => {

        const [counter, setCounter] = useState(100)  //useStatesnip

  return (
    <> 

        <h1> Counter: { counter } </h1>

        <hr/>

        <button className="btn" onClick={() => setCounter( counter + 1 ) }>+1</button>
    
    
    </>
  )
}











































