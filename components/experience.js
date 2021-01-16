import React from 'react';
import Image from 'next/image';
import Style from '../styles/global.module.css';

const Experience = () =>{
    return(
        <div className = {Style.experience}>
            <h2>Experiencia Laboral - Front-End</h2>
            <div>
                <Image
                    src ="/images/me/ME2.svg"
                    alt = "MR"
                    width = {200}
                    height = {200}
                />
            </div>
            <div>
                <p>Montería radio 38 grados</p>
                <p>Cargo: Web Master</p>
            </div>
        </div>
)};

export default Experience;