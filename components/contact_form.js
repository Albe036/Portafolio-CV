import React, { useState} from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Style from '../styles/global.module.css';
const axios = require('axios');


const Form = () =>{
    const router = useRouter();

    let [nombre, setNombre] = useState("");
    let [email, setEmail] = useState("");
    let [telefono, setTel] = useState("");
    let [mensaje, setMensaje] = useState("");


    const change_name = (e) =>{
        setNombre(nombre = e.target.value)
    }
    const change_mail = (e) =>{
        setEmail(email = e.target.value)
    }
    const change_tel = (e) =>{
        setTel(telefono = e.target.value)
    }
    const change_mensaje = (e) =>{
        setMensaje(mensaje = e.target.value)
    }

    const on_Submit = async (e) =>{
        e.preventDefault()
        const info = await axios.post('https://send-email-cv.herokuapp.com/send-email', {
            nombre : nombre,
            email: email,
            telefono: telefono,
            mensaje: mensaje
        })
        if(info.status == 200){
            router.push("/success")
        }

    }


    return(
        <div className={Style.form_main}>
            <Image
                src = "/images/me/ME1.svg"
                alt = "Yo1"
                width = {120}
                height = {120}
            />
            <h3>Gracias por escribirme, en que puedo ayudarte?</h3>
            <form onSubmit={on_Submit}>
                <div  className={Style.form_main_info}>
                    <div>
                        <h4>Su nombre</h4>
                        <input
                            type="text"
                            onChange = {change_name}
                        />
                    </div>
                    <div>
                        <h4>Su E-mail</h4>
                        <input
                            type="email"
                            onChange={change_mail}
                            />
                    </div>
                    <div>
                        <h4>Su Telefono</h4>
                        <input
                            type="tel"
                            onChange={change_tel}
                            />
                    </div>
                    <div className={Style.textArea}>
                        <h4>Su Mensaje</h4>
                        <textarea 
                            onChange={change_mensaje}
                        ></textarea>
                    </div>
                    <div  className={Style.button}>
                        <input type="submit"/>
                    </div>
                </div>

            </form>
        </div>
)};

export default Form;