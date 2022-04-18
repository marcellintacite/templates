import React, { useState } from "react";
import { db } from "../firebase";
import { setDoc, collection } from "firebase/firestore";
import Comment from './comment';

const Poeme = ({ poeme }) => {
  const [like, setLike] = useState(false);
  const likeNumber = 1;
  const [comment, setComment] = useState(true);

  const handleLike = (id) => {
    setLike(!like);
  };
  return (
    <div className="poeme">
      <div className="header">
        <div className="author">{poeme.author.name}</div>
        <div className="time">{poeme.author.now}</div>
      </div>
      <div className="box_poeme">
        <h2>{poeme.titre}</h2>
        <div className="poeme_texte">{poeme.poeme}</div>
      </div>
      <div className="footer">
        <div className="icon_content">
          <i
            className={like ? "fa fa-heart" : "fa fa-heart-o"}
            onClick={() => handleLike(poeme.id)}
          ></i>
          <i className="fa fa-comment-o" onClick={() => setComment(true)}></i>
          <i className="fa fa-share-alt"></i>
        </div>
      </div>
          <Comment/>
    </div>
  );
};

export default Poeme;
