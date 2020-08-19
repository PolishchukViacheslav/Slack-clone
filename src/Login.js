import React from 'react';
import './Login.css';
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from './StateProvider';
import { setUser } from './reducer';

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(setUser(result.user))
      })
      .catch((error) => {
        alert(error.message);
      })
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src="https://i.pcmag.com/imagery/reviews/07td46ju7p6lLVb0QGwc5VF-6..v_1569479844.jpg" alt="Slack application logo"/>
        <h1>Sign in to FE in 2020</h1>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  )
}

export default Login
