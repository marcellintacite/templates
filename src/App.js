import React, { useState } from "react";
import Navbar from "./Components/Common/Navbar";
import "font-awesome/css/font-awesome.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Components/NotFound";
import Home from "./Components/Home";
import ConfigContext from "./Components/context/Dark";
import { Toaster } from "react-hot-toast";
import ProjetPage from "./Components/ProjetPage";

export default function App() {
  const [dark, setDark] = useState(false);
  return (
    <>
      <ConfigContext.Provider
        value={{
          dark,
          setDark,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projet" element={<ProjetPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </ConfigContext.Provider>

    </>
  );
}
