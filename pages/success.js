import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Style from '../styles/global.module.css';

const Success = () =>{
    return(
        <div>
            <div>
                <Image
                    src="/images/success/bosque.svg"
                    alt = "bosque"
                    width = {100}
                    height = {100}
                />
            </div>
            <div className={Style.success}>
                <Image
                    src="/images/success/buzon1.svg"
                    alt = "bosque"
                    width = {200}
                    height = {200}
                />
                <h2>Mensaje recibido, Gracias!</h2>
                <h3>En breve me pondre en contacto con usted</h3>
                <Link href="/">
                    <a>Volver al inicio</a>
                </Link>
            </div>
        </div>
)};

export default Success;