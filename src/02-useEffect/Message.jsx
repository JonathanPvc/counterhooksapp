import { useEffect } from "react";


export const Message = () => {

    useEffect(() => {
      console.log('mesage Mounted');
    
      return () => {
        console.log('mesage UNMounted');
      }
    }, []);
    

  return (
    <> 
        <h3>Usuario ya existe</h3>
    </>
  )
}

