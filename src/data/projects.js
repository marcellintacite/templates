import ufahamu from '../assets/project/ufahamu.png'
import mapenzi from '../assets/project/mapenzi.png'
import audi from '../assets/project/audi.png'
import contact from '../assets/project/conact.png'
import dash from '../assets/project/dash.png'
import emarket from '../assets/project/emarket.png'
import marcytube from '../assets/project/marcytube.png'
import rss from '../assets/project/rss.png'

const projects = [
    {
        id: 1,
        nom: "Mapenzi test",
        description: "Une petite application  pour tester le degré d’amour",
        tech: ["html", "css", "Javascript"],
        lien: "https://mapenzitest.netlify.app",
        code: "https://",
        img: mapenzi
    },
    {
        id: 2,
        nom: "ufahamu test",
        description: "Application de quiz",
        tech: ["html", "css", "Javascript"],
        lien: "https://ufahamutest.netlify.app",
        code: "",
        img: ufahamu
    },
    {
        id: 3,
        nom: "AudiGest",
        description: "Application pour gérer un auditoire",
        tech: ["html", "css", "React", "sass", "Qr code"],
        lien: "https://www.youtube.com/watch?v=B2rbTFfKsmE&t=99s",
        code: "https://github.com/marcellintacite/edugest",
        img: audi
    },
    {
        id: 4,
        nom: "Sifa box",
        description: "Reseau social pour poster et booster les événements",
        tech: ["react", "MUI", "firebase"],
        lien: "https://sifaboxtest.netlify.app",
        code: "",
        img: rss
    },
    {
        id: 5,
        nom: "emarket",
        description: "Application e-commerce",
        tech: ["html", "css", "react", "Bootstrap"],
        lien: "https://emarkete.netlify.app/",
        code: "",
        img: emarket
    },
    {
        id: 6,
        nom: "Responsive dashboard",
        description: "Dashbord responsive ",
        tech: ["html", "css", "react", "MUI"],
        lien: undefined,
        code: "https://github.com/marcellintacite/react-dash",
        img: dash
    },
    {
        id: 7,
        nom: "MarcyTube",
        description: "Application clone youtube",
        tech: ["html", "css", "react", "sass"],
        lien: undefined,
        code: "",
        img: marcytube
    },
    {
        id: 8,
        nom: "Contact App",
        description: "Application de gestion de contact",
        tech: ["html", "css", "php"],
        lien: undefined,
        code: "https://github.com/marcellintacite/cotact_manager",
        img: contact
    },
]

export default projects