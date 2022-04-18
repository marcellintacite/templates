import React, { useState } from "react";
import { auth, provider, facePovider } from "../firebase";
import { useNavigate } from "react-router-dom";

import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";

const Login = ({ setIsAuth }) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, mail, password)
      .then((response) => {
        console.log(response.user);
        localStorage.setItem("id", response.user.uid);
        setIsAuth(true);
        window.location.replace("/poemes");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((response) => {
      toast.success("Connexion avec succès");
      setIsAuth(true);
      window.location.replace("/poemes");
      localStorage.setItem("id", response.user.uid);
    });
  };

  const signInWithFacebook = () => {
    signInWithPopup(auth, facePovider).then((response) => {
      toast.success("Connexion avec succès");
      setIsAuth(true);
      window.location.replace("/poemes");
      localStorage.setItem("id", response.user.uid);
    });
  };

  const handleSignout = () => {
    signOut(auth);
    localStorage.removeItem("id");

    setTimeout(() => {
      window.location.replace("/home");
    });
  };

  return (
    <div className="login">
      <h2>Inscription</h2>
      <form action="" className="my_form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Votre adresse mail: </label>
          <input
            type="texte"
            name="mail"
            value={mail}
            className="form-control"
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Votre mot de passe: </label>
          <input
            type="password"
            value={password}
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary my-3">
          Inscription
        </button>
        <button className="btn btn-warning my-2" onClick={signInWithGoogle}>
          Connexion avec <i className="fa fa-envelope"></i>
        </button>
      </form>
    </div>
  );
};

export default Login;
