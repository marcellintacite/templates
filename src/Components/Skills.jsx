import React from 'react'
import '../css/skill.css'
import Bars from './Common/Bars'
export default function Skills({ dark }) {
  return (
    <div className={dark ? "skill active" : "skill"}>
      <h2 className='title'>Connaissances</h2>

      <div className="cards">

        <div className="left">
          <div className="items">
            <Bars title="Logicel de bureau" width={"90%"} color="#169c94" circle="#333948" />
            <Bars title="Analyse des données (Epi info,etc)" width={"70%"} color="#9f98e8" circle="#333" />
            <Bars title="G-Suite" width={"85%"} color="#f8ff5f" />
            <Bars title="Python" width={"80%"} color="#ff8a78" />
            <Bars title="php" width={"65%"} color="#48b0ff" />
            <Bars title="UI/UX design" width={"82%"} color="#9f98e8" />
          </div>
        </div>
        <div className="right">
          <div className="items">
            <Bars title="html" width={"85%"} color="#ff8a78" />
            <Bars title="css" width={"87%"} color="#f8ff5f" />
            <Bars title="javascript" width={"80%"} color="#48b0ff" />
            <Bars title="react" width={"90%"} color="#9f98e8" />
            <Bars title="react native" width={"70%"} color="#169c94" />
            <Bars title="design graphique" width={"80%"} color="#ff8a78" />
          </div>
        </div>
      </div>

    </ div>
  )
}

