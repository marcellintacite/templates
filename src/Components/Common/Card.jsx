import React from 'react'

export default function Card({item}) {
  return (
    <div className="card">
        <div className="img">
            <img src={item.img} alt="" />
        </div>

        <div className="body">
            <h3>{item.nom}</h3>
            <p>{item.description}</p>

            <div className="tech">
                {
                    item.tech.map(t=>(
                        <div className="tech_item" key={t}>
                            <span>{t}</span>
                        </div>
                    ))
                }
            </div>
        </div>

        <div className="foot">
            {
                item.lien && <a href={item.lien}>Demo</a>
            }
             {
                item.code && <a href={item.code}>Code</a>
            }
        </div>
        
    </div>
  )
}
