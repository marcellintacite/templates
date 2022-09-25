import React, { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";
import "../../css/layout.css";

function Layout({ children }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 3000);
  });
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      {!show && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Triangle color="#00BFFF" height={80} width={80} />
        </div>
      )}
      {show && <div className="anim">{children}</div>}
    </div>
  );
}

export default Layout;
