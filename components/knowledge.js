import React from 'react';
import Style from '../styles/global.module.css';
import Image from 'next/image';

const Knowledge = () =>{
    return(
        <div>
            <div className={Style.knowledge}>

                <h2>Conocimientos</h2>
                <div className={Style.knowledge_images}>
                    <div className={Style.know_card}>
                        <h3>HTML</h3>
                        <Image
                            src="/images/know/html.svg"
                            alt="html"
                            width="100"
                            height="100"
                        />
                        <Image
                            src="/images/flecha.svg"
                            alt="html"
                            width="60"
                            height="60"
                        />
                    </div>
                    <div className={Style.know_card}>
                        <h3>CSS</h3>
                        <Image
                            src="/images/know/css.svg"
                            alt="html"
                            width="100"
                            height="100"
                            />
                        <Image
                            src="/images/flecha.svg"
                            alt="html"
                            width="60"
                            height="60"
                        />
                    </div>
                    <div className={Style.know_card}>
                        <h3>JAVASCRIPT</h3>
                        <Image
                            src="/images/know/javascript.svg"
                            alt="html"
                            width="100"
                            height="100"
                            />
                        <Image
                            src="/images/flecha.svg"
                            alt="html"
                            width="60"
                            height="60"
                            />
                    </div>
                </div>
            </div>
            <div className={Style.icons}>
                <h2>Frameworks & mas</h2>
                <div>
                    <Image src = "/images/fw/dominio.svg" alt="fw1" width={60} height={60}/>
                    <Image src = '/images/fw/github.svg' alt="fw2" width={60} height={60}/>
                    <Image src = '/images/fw/hablar.svg' alt="fw3" width={60} height={60}/>
                    <Image src = '/images/fw/html-5.svg' alt="fw4" width={60} height={60}/>
                    <Image src = '/images/fw/mysql.svg' alt="fw5" width={60} height={60}/>
                    <Image src = '/images/fw/nodejs.svg' alt="fw5" width={60} height={60}/>
                    <Image src = '/images/fw/reaccionar.svg' alt="fw5" width={60} height={60}/>
                </div>
            </div>
            <Info/>
        </div>
)};

export default Knowledge;


const Info = () =>{
    return(
            <div className={Style.info}>
                <div className={Style.titulo_info}>
                    <h3>Como se diseño este sitio web</h3>
                </div>
                <div>
                    <h4>HTML</h4>
                    <p>Convencion y Buenas practicas</p>
                </div>
                <div>
                    <h4>CSS</h4>
                    <p>SASS</p>
                    <p>CSS Grid</p>
                    <p>Flex-box</p>
                    <p>Box-model</p>
                </div>
                <div>
                    <h4>JAVASCRIPT</h4>
                    <p>React</p>
                    <p>NextJS</p>
                    <p>Hooks</p>
                    <p>ReactDOM</p>
                    <p>Isomorphic-fetch</p>
                    <p>Buenas practicas</p>
                    <p>Enfoque funcional</p>
                </div>
            </div>
    )};