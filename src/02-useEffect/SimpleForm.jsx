import { useEffect } from "react";
import { useState } from "react"
import { Message } from './Message';


export const SimpleForm = () => {

  const [formState, setFormState] = useState({  //podemos verlo en componente hook en consola
    username: 'strider',
    email: 'jonathan@google.com'
  })

  const { username, email } = formState;


  const onInputChange = ({ target }) => {
    const { name, value } = target;
    //console.log(event.target.name) o value para darme cuenta los valores del cambio
    //console.log({name , value }) 2 paso
    setFormState({
      ...formState,
      [name]: value //propiedades computadas de los objectos
    });

  }

  useEffect(() => {//sirve para disparar efectos segundarios, es una funcion que internamente tiene un callback
   // console.log('useEffect llamado');

  }, []); //[] sigmifica que quiere q el useEefect se dispare una vez

  useEffect(() => {
    //console.log('forstarw llamado');

  }, [formState]);

  useEffect(() => {
    //console.log('email llamado');

  }, [email]);


  return (
    <>
      <h1> Formulario Simple </h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-3"
        placeholder="jonathan13pvc@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />


      {
          ( username === 'strider2') && <Message />
      }

    </>
  )
}

