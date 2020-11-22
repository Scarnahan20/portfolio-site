import React from 'react';
import { Card, CardDeck, Container } from 'react-bootstrap';

function Education() {
    return (
        <Container fluid className="education">
            <h1>Education</h1>
            <CardDeck>
                <Card bg="#f9c49a">
                    <Card.Body>
                        <Card.Title>San Diego State University</Card.Title>
                        <Card.Text>Graduated May 2020</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="education-cards">
                    <Card.Body>
                        <Card.Title>The Complete 2020 Web Development Bootcamp</Card.Title>
                        <Card.Text>Certificate Earned July 2020</Card.Text>
                    </Card.Body>
                </Card>
                <Card className="education-cards">
                    <Card.Body>
                        <Card.Title>The Complete 2020 Flutter Development Bootcamp with Dart</Card.Title>
                        <Card.Text>Certificate Earned November 2020</Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        </Container>
    );
}

export default Education;