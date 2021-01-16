import React from 'react';
import Style from '../styles/global.module.css';
import Link from 'next/link';

const Redirection = () =>{
    return(
        <div className = {Style.redirection}>
            <div className = {Style.titulo_redir}><h3>Mas acerca de mi</h3></div>
            <div>
                <h4>Curriculum</h4>
                <p>Dar un vistazo a mi Curriculum y saber mas acerca de mi</p>
            </div>
            <div>
                <h4>Contactame</h4>
                <p>Enviame un correo electronico</p>
            </div>
            <div>
                <Link href="/about">
                    <p className = {Style.botones}>Acerca de mi</p>
                </Link>
            </div>
            <div>
                <Link href="/contact">
                    <p className = {Style.botones}>Contactame</p>
                </Link>
            </div>
        </div>
)};

export default Redirection;