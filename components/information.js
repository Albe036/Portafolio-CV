import React from 'react';
import Image from 'next/image';
import Style from '../styles/global.module.css';

const Information = () =>{
    return(
        <div className = {Style.information}>
            <h1>Albeiro Javier Lozano Peñate</h1>
            <div className = {Style.information_grid}>
                <div>
                    <Image
                        src="/images/me/ME3.jpg"
                        alt = "Foto de perfil"
                        width={200}
                        height={220}
                        className = {Style.foto_perfil}
                    />
                </div>
                <div>
                    <p><span>Profesion:</span> Ingeniero de sistemas</p>
                    <p><span>Fecha de nacimiento:</span> 15 agosto 1993</p>
                    <p><span>Dirección:</span> Transversal 86a # 83a - 37 Bogotá</p>
                    <p><span>Telefono:</span> 3008442926 - 3225667456</p>
                    <p><span>E-mail:</span> albeiro.lozanop@gmail.com</p>
                </div>
            </div>
        </div>
)};

export default Information;