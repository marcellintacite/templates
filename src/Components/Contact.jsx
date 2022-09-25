import React, { useState, useRef } from 'react'
import bg from '../assets/l.png'
import '../css/contact.css'
import {send} from 'emailjs-com'
import toast from 'react-hot-toast'
import {Circles} from 'react-loader-spinner'

export default function Contact({dark}) {
    const [user_name,setName] = useState("")
    const [user_email,setMail] = useState("")
    const [message,setMessage] = useState("")
    const [subject,setSujet] = useState("")
    const [sh,setSh]= useState(false)

    const form = useRef()

    const handleSend = (e)=>{
        e.preventDefault();
        const sms = `${user_name} avec comme sujet : ${subject} et son adresse mail est : ${user_email}.
        Voici le message : ${message}`;
        const data = {user_name,user_email,subject,message:sms}
        setSh(true)
        send("service_bpxmj5d","template_9qg28js",data,"3tD-CwbXwoMABcYaB").then(result=>{
            setSh(false)
            setMail("")
            setMessage("")
            setName("")
            setSujet("")
            toast.success("Mail envoyé avec succès ! ")
        }).catch(error =>{
            toast.error("Votre message n'a pas été envoyé, veuillez refaire!")
            setSh(false)
            console.log(error)
        })
    }

  return (
    <div className={dark ? "contact active":"contact"}>
        <div className="title">
            <h3>Envoyez-moi un mail </h3>
            <div className="bar"></div>
        </div>
        <div className="form_content">
            
            <form action="" ref={form} onSubmit={handleSend}>
                    <div className="form_group">
                        <label htmlFor='nom'>Votre nom :</label>
                        <input type="text" name="name" id="name" value={user_name} onChange={(e)=>setName(e.target.value)} required />
                    </div>
                    <div className="form_group">
                        <label htmlFor='mail'>Votre adresse mail :</label>
                        <input type="mail" name="email" id="email" value={user_email} onChange={(e)=>setMail(e.target.value)} required/>
                    </div>
                    <div className="form_group">
                        <label htmlFor='subjet'>Objet de votre mail :</label>
                        <input type="text" name="subjet" id="subjet" value={subject} onChange={(e)=>setSujet(e.target.value)} required/>
                    </div>

                    <div className="form_group">
                        <label htmlFor='message'>Message :</label>
                        <textarea value={message} name="message" onChange={(e)=>setMessage(e.target.value)} 
                        id="email_body" required/>
                    </div>
                <button type='submit' className='btn'>Envoyer <Circles width={15} height={15} color="#fff" wrapperClass='circle' visible={sh}/> </button>
            </form>
            <div className="right">
                <img src={bg} alt="" />
            </div>
        </div>
    </div>
  )
}
