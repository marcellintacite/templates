import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useState } from "react";

const Navbar = ({ isAuth }) => {
  const id = localStorage.getItem("id");
  const [show, setShow] = useState(false);
  const handleSignout = () => {
    signOut(auth);
    localStorage.removeItem("id");
    toast.success("Vous etes partis");
    setTimeout(() => {
      window.location.replace("/home");
    }, 500);
  };
  return (
    <div className="navbar_c">
      <div className={show ? "links active" : "links"}>
        {!id && <Link to="/home">Accueil</Link>}
        {!id && <Link to="/">Connexion</Link>}
        {id && <Link to="/poemes">Poemes</Link>}
        {id && <Link to="/add">Publier un poème</Link>}
        {id && (
          <button className="btn btn-danger btn-sm" onClick={handleSignout}>
            Deconnexion
          </button>
        )}
      </div>

      <span
        className="fa fa-align-justify icon"
        onClick={() => setShow(!show)}
      ></span>
    </div>
  );
};

export default Navbar;
