import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h2>This is the home page</h2>
      <Link className="btn btn-info" to="/">
        Se connecter
      </Link>
    </div>
  );
};

export default Home;
