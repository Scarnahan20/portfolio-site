import React from 'react';
import { Container, Media } from 'react-bootstrap';

function About() {
    return(
        <Container fluid className="about p-4">
            <div className="d-flex justify-content-center">
                <h1>Hi</h1>
            </div>
            <div className="d-flex justify-content-center">
                <Media>
                    <img 
                        alt="Profile"
                        className="profile" 
                        src="./profile-image.jpg" 
                    />
                </Media>
            </div> 
            <div className="d-flex justify-content-center">
                <h2>I'm Stefan Carnahan, a programmer</h2>
            </div>
        </Container>
    );
}

export default About;