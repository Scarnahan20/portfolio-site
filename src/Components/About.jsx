import React from 'react';
import { Container, Media, Row, Col } from 'react-bootstrap';

function About() {
    return (
        <Container fluid className="about p-4">
            <Row className="intro">
                <Col xl="3">
                    <Media>
                        <img
                            alt="Profile"
                            className="profile"
                            src="./profile-image.jpg"
                        />
                    </Media>
                </Col>
                <Col>
                    <h1>Stefan Carnahan</h1>
                    <p>Recent college graduate looking for opportunities in software engineering.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default About;