import React from 'react';
import Style from '../styles/global.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () =>{
    return(
        <div className={Style.footer_main}>
            <Image
                src='/images/footer/cohete.svg'
                alt='footer images'
                width={50}
                height={50}
            />
            <h3>Desarrollador Front-End</h3>
            <h4>Redes sociales</h4>
                <div>
                    <Image
                        src='/images/sn/github.svg'
                        alt='footer images'
                        width={30}
                        height={30}
                        className = {Style.footer_img}
                    />
                </div>
                
                <Image
                    src='/images/sn/linkedin.svg'
                    alt='footer images'
                    width={30}
                    height={30}
                    className = {Style.footer_img}
                />
                <Image
                    src='/images/sn/email.svg'
                    alt='footer images'
                    width={30}
                    height={30}
                    className = {Style.footer_img}
                />
           
            <h5>Derechos Reservados - Albeiro Lozano 2021</h5>
        </div>
)};

export default Footer;