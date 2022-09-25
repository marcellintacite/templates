import React, { useEffect } from 'react'
import '../css/projet.css'
import projects from '../data/projects'
import Card from './Common/Card'
import { Link } from 'react-router-dom'
import Aos from 'aos'

export default function Projet({ dark }) {
  let liste = [];
  for (let i = 0; i <= 3; i++) {
    liste.push(projects[i])
  }

  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (
    <div className={dark ? "projet active" : 'projet'} data-aos="fade-up">
      <div className="title">
        <h2>Mes projets</h2>
        <div className="tire"></div>
      </div>
      <div className='items' data-aos="fade-up">
        {
          liste.map(item => (

            <Card item={item} key={item.id} />
          )
          )
        }
      </div>
      <div className='link'>
        <Link className='plus' to="/projet">Voir plus</Link>
      </div>
    </div>
  )
}
