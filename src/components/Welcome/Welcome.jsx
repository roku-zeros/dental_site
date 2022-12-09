import React from "react";
import Container from "react-bootstrap/Container";
import {Row, Col} from "react-bootstrap";

const Welcome = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md='7'>
                        1
                    </Col>
                    <Col md='5'>
                        2
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Welcome;