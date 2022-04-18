import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import Poeme from "./poeme";
import "./css/poeme.css";
import Annonce from "./sidebar";

const Poemes = () => {
  const [poemes, setPoemes] = useState([]);

  const poemeCollecion = collection(db, "poemes");

  useEffect(() => {
    const getPoemes = async () => {
      const data = await getDocs(poemeCollecion);
      setPoemes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPoemes();
  });
  return (
    <div className="poemes">
      <div className="row">
        <div className="col-lg-3">
          <Annonce/>
        </div>
        <div className="col-lg-6">
          <div className="poemes_content">
            {poemes.map((poeme) => (
              <Poeme poeme={poeme} key={poeme.id} />
            ))}
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
};

export default Poemes;
