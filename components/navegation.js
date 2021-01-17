import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Style from '../styles/global.module.css';

const Navegation = (props) =>{
    return(
        <div className={Style.contenedor_nav}>
            <Link href="/">
                <ul className={Style.main_nav}>
                    <li>
                        <Image
                            src="/images/dev.svg"
                            alt="Icono principal"
                            height={30}
                            width={30}
                        />
                    </li>
                    <li>Dev Web</li>
                </ul>
            </Link>
            <ul className={Style.menu_nav}>
                <Link href="/">
                    <li>Inicio</li>
                </Link>
                <Link href="/about">
                    <li>Perfil</li>
                </Link>
                <Link href="/contact">
                    <li className={Style.contact}>Contactame</li>
                </Link>
            </ul>
        </div>
)};


export default Navegation;