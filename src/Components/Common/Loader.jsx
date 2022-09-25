import React from "react";
import { Triangle } from "react-loader-spinner";
function Loader(props) {
  return (
    <div>
      <Triangle color="#00BFFF" height={80} width={80} />
    </div>
  );
}

export default Loader;
