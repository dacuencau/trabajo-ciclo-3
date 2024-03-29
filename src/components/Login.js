import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "../Profile";

const Login = ()=>{
  const { isAuthenticated, isLoading } = useAuth0();
  
  if (isLoading){
    return <h1>Is Loading ...</h1>
  }
  
  return(
  <section className="Home">
    { isAuthenticated ? 
      <div>
        <LogoutButton/> 
        <Profile/>
      </div>
    : 
      <div>
        <h3>Bienvenido </h3>
        <p>Registro mediante Google - OAuth2</p>
        <LoginButton/>
      </div> 
    }
  </section>
  );
};

export default Login


//    { isAuthenticated ? <LogoutButton/> : <LoginButton/> }
