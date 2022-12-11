import React from "react";
import Container from "react-bootstrap/Container";
import {Row, Col, Stack, Card} from "react-bootstrap";

import WelcomeDoctor from '../../assets/images/welcome-bg.png'
import styles from './WelcomeServices.module.css'
import baseStyles from '../../index.module.css'


const WelcomeServices = () => {
    return (
        <div className={styles.welcome_services_wrapper}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div>
                            <h2 className={baseStyles.blue}>
                                Приветствую вас в клинике Эрдент!
                            </h2>
                            <p>
                                Здравствуйте. Я главврач клиники Эрдент - Самидинов Эргазы.
                                Я даю вам гарантию того, что вы получите своевременную и
                                безопасную стоматологическую помощь, так как мы оказываем услуги
                                по самым высоким мировым стандартам.
                                <br/>
                                Для нас важно качественно выполнять свою работу, создавать хорошие
                                и безопасные условия для наших пациентов и дарить вам улыбку
                            </p>
                        </div>
                        <div>

                        </div>
                    </Col>
                    <Col md={6}>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WelcomeServices;