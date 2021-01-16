import React, { useState } from 'react';
import Image from 'next/image';
import Style from '../styles/global.module.css';


const Profile = () =>{

    //let dir = "/images/me/ME1.svg";

    let [direction, setDirection] = useState("/images/me/ME1.svg")

    const change1 = () =>{
        setDirection(direction = "/images/me/ME2.svg");
    };

    const change2 = () =>{
        setDirection(direction = "/images/me/ME1.svg");
    };
    
    
    return(
        <div className={Style.profile}>
            <h1>Desarrollador Front-End</h1>
            <Image
            id="profile_main"
            src = {direction}
            alt="Perfil 1"
            width={150}
            height={150}
            onMouseOver = {change1}
            onMouseOut = {change2}
            
            />
            
            <p><span>Hola Mundo</span>, Mi nombre es Albeiro Lozano un apasionado por el desarrollo web Front-end, quien siempre esta dispuesto a aprender mucho mas.</p>
        </div>
)};

export default Profile;