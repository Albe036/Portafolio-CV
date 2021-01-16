import React from 'react';
import Navegation from './navegation';
import Footer from './footer';
import Head from 'next/head';

const Nav_footer = (props) =>{
    return(
        <div>
            <Head>
                <title>{props.title}</title>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap" rel="stylesheet"/>
            </Head>
            <Navegation/>
            {props.children}
            <Footer/>
        </div>
)};

export default Nav_footer;