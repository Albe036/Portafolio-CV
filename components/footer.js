import React from 'react';
import Style from '../styles/global.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Footer = () =>{
    
    const router = useRouter();
    const redirection_git = e =>{
        router.push("https://github.com/Albe036");
    }
    const redirection_linked = e =>{
        router.push("https://www.linkedin.com/in/albeiro-javier-lozano-pe%C3%B1ate-7486a91b5/");
    }
    const redirection_mail = e =>{
        router.push("/contact");
    }

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
                        onClick={redirection_git}
                        />
                </div>
                
                <Image
                    src='/images/sn/linkedin.svg'
                    alt='footer images'
                    width={30}
                    height={30}
                    className = {Style.footer_img}
                    onClick={redirection_linked}
                    />
                <Image
                    src='/images/sn/email.svg'
                    alt='footer images'
                    width={30}
                    height={30}
                    className = {Style.footer_img}
                    onClick={redirection_mail}
                    />
           
            <h5>Derechos Reservados - Albeiro Lozano 2021</h5>
        </div>
)};

export default Footer;