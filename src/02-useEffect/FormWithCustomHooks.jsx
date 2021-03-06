import { useEffect } from "react";
import { Bontones } from "../00Prueba/Bontones";

import { useForm } from "../hooks/useForm";



export const FormWithCustomHooks = () => {

  const { formState, onInputChange} = useForm( {  
      username: '',
      email   : '',
      password: ''
  });

     const { username, email, password } = formState;



  return (
    <>
      <h1> Formulario con custom hooks </h1>
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

      <input
        type="password"
        className="form-control mt-3"
        placeholder="contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

     
     <Bontones />

    </>

  
  )
}

