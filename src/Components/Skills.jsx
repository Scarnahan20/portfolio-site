import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';

function Skills() {
    let skillsList = [
        ["C", "C++", "C#", "Java", "Python"],
        ["Linux", "Windows", "git/GitHub", "Unity 3D", "bash"],
        ["Relational Databases (SQL)", "NoSQL Databases", "Machine Learning", "Artificial Intelligence", "Agile Development"],
        ["Flutter/Dart", "Bootstrap", "RESTful APIs", "JavaScript(Node.js and React.js)", "HTML5/CSS"]
    ];
    return (
        <Container fluid className="skills p-4">
            <h1>Skills & Languages</h1>
            <Row>
                {skillsList.map(
                    function (column) {
                        return (
                            <Col>
                                <ListGroup>
                                    {column.map((skill) => <ListGroup.Item>{skill}</ListGroup.Item>)}
                                </ListGroup>
                            </Col>
                        );
                    }
                )}
            </Row>
            <br />
        </Container>
    );
}

export default Skills;