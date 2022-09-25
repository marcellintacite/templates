import React, { useContext } from "react";
import "../css/home.css";
import Center from "./Center";
import Layout from "./Common/Layout";
import Navbar from "./Common/Navbar";
import Contact from "./Contact";
import ConfigContext from "./context/Dark";
import Projet from "./Projet";
import Skills from "./Skills";
import Aos from "aos";
import { useEffect } from "react";
import Footer from "./Footer";

export default function Home() {
  const { dark, setDark } = useContext(ConfigContext);
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (
    <Layout>
      <div className={dark ? "home active" : "home"}>
        <Navbar dark={dark} set={setDark} />
        <Center dark={dark} />
        <Skills dark={dark} />
        <Projet dark={dark} />
        <Contact dark={dark} />
        <Footer />
      </div>
    </Layout>
  );
}
