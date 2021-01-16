import React from 'react';
import Nav_footer from '../components/nav_footer';
import Profile from '../components/profile';
import Knowledge from '../components/knowledge';
import Redirection from '../components/redirection';
import Project from '../components/project';
import Style from '../styles/global.module.css';

const Main = () =>{
    return(
        <div className={Style.index}>
            <Nav_footer title = "Landing Page">
                <Profile/>
                <Knowledge/>
                <Redirection/>
            </Nav_footer>
            
        </div>
)};

export default Main;