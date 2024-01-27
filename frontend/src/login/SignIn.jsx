import {auth, provider} from "../login/Config"
import {signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Home } from "./Home";

export const Signin = () => {
    const navigate = useNavigate()
    const [login, setLogin] = useState("")
   
    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
          setLogin(data.user);
          localStorage.setItem('user', JSON.stringify(data.user));
          navigate("/users")
          window.location.reload();
        });
      };
    
      useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          try {
            const parsedUser = JSON.parse(storedUser);
            setLogin(parsedUser);
          } catch (error) {
           throw Error(error)
          }
        }
      }, []);

  return (
    <div>
        {login ? <Home login={login}/> : <button onClick={handleClick} className="border-2 rounded-md px-3 py-1 bg-blue-950 text-white">Iniciar sesión</button>}
    </div>
  )
}
