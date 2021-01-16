import React from 'react';
import Nav_footer from '../components/nav_footer';
import Information from '../components/information';
import Experience from '../components/experience';
import Redirection from '../components/redirection';

const About = () => {
    return(
        <div>
            <Nav_footer title = "Acerca de mi">
                <Information/>
                <Experience/>
                <Redirection/>
            </Nav_footer>
        </div>
)};

export default About;