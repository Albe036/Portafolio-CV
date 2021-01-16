import React from 'react';
import Style from '../styles/global.module.css';

const Project = () =>{
    return(
        <div className = {Style.project}>
            <p>Si estas interesado en iniciar un proyecto conmigo hazmelo saber    <span className = {Style.project_boton}>Cuentame</span></p>
        </div>
)};

export default Project;