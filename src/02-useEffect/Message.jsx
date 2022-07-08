import { useEffect, useState } from "react";


export const Message = () => {

    const [coords, setCoords] = useState({x : 0, y : 0});
   
   
    useEffect(() => {


        const onMouseMove = ({x,y }) => {

            setCoords( { x, y } )

           // const coords = { x, y }
           // console.log(coords)
        }
      
        window.addEventListener('mousemove' , onMouseMove);//(event) => {
           // console.log(event)
      //
      //console.log('mesage Mounted');
    
      return () => {
        //console.log('mesage UNMounted');

        window.removeEventListener('mousemove', onMouseMove);
      }
    }, []);
    

  return (
    <> 
        <h3>Usuario ya existe</h3>
        {
            JSON.stringify( coords )
        }
    </>
  )
}

