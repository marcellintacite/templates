import React, { useContext } from 'react'
import Layout from './Common/Layout'
import Navbar from './Common/Navbar'
import projects from '../data/projects'
import Card from './Common/Card'
import ConfigContext from './context/Dark'
import '../css/project.css'

export default function ProjetPage() {
    const { dark, setDark } = useContext(ConfigContext);
    return (
        <Layout>
            <Navbar dark={dark} set={setDark} />

            <div className={dark ? "projects active" : "projects"}>
                <div className="items">
                    {
                        projects.map(item => (

                            <Card item={item} key={item.id} />
                        )
                        )
                    }
                </div>
            </div>
        </Layout>
    )
}
