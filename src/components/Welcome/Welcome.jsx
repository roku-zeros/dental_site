import React from "react";
import Container from "react-bootstrap/Container";
import {Row, Col} from "react-bootstrap";

import WelcomeDoctor from '../../assets/images/welcome-doctor.png'
import styles from './Welcome.module.css'

const Welcome = () => {
    return (
        <div className={styles.welcome_wrapper}>
            <Container>
                <Row>
                    <Col md='7'>
                        <h1>Красивая улыбка меняет Всё!</h1>
                    </Col>
                    <Col md='5'>
                        <img src={WelcomeDoctor}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Welcome;