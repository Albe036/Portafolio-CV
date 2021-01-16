import React from 'react';
import Image from 'next/image';
import Style from '../styles/global.module.css';

const Experience = () =>{
    return(
        <div className = {Style.experience}>
            <h2>Experiencia Laboral - Front-End</h2>
            <div>
                <Image
                    src ="/images/me/MR.jpg"
                    alt = "MR"
                    width = {150}
                    height = {150}
                />
            </div>
            <div>
                <p>Montería radio 38 grados</p>
                <p>Cargo: Web Master</p>
            </div>
        </div>
)};

export default Experience;