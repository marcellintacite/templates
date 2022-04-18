import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import moment from "moment";

const AddPoem = ({ isAuth }) => {
  const [titre, setTitre] = useState("");
  const [poeme, setPoeme] = useState("");

  const poemeCollecion = collection(db, "poemes");
  const navigation = useNavigate();
  useEffect(() => {
    document.title = "Ajouter un poeme";
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const now = moment().format("MMMM Do YYYY, h:mm:ss a");
    await addDoc(poemeCollecion, {
      titre,
      poeme,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
        now,
      },
    });
    toast.success("Votre poeme est publié!");

    setTimeout(() => {
      navigation("/poemes");
    }, 500);
  };
  return (
    <div className="add">
      <h2>AJouter un poeme</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Titre: </label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="poeme">Votre poeme: </label>
          <input
            name="poeme"
            id=""
            cols="30"
            rows="10"
            type="text"
            className="form-control po"
            value={poeme}
            onChange={(e) => setPoeme(e.target.value)}
          ></input>
        </div>

        <button type="submit" className="btn btn-primary my-2">
          Publier now
        </button>
      </form>
    </div>
  );
};

export default AddPoem;
