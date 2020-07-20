import React from 'react';
import { Container, Media } from 'react-bootstrap';

function About() {
    return(
        <div className="about">
            <Container fluid className="p-4">
                <h1>Hi</h1>
                <Media>
                    <img 
                        alt="Profile"
                        className="profile" 
                        src="./profile-image.jpg" 
                    />
                </Media>
            </Container>
        </div>
    );
}

export default About;