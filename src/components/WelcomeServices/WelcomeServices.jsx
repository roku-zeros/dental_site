import React from "react";
import Container from "react-bootstrap/Container";
import {Row, Col} from "react-bootstrap";

import MainDoctor from '../../assets/images/main-doc.jpg'
import styles from './WelcomeServices.module.css'
import baseStyles from '../../index.module.css'


const WelcomeServices = () => {
    return (
        <div className={styles.welcome_services_wrapper}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className={styles.main_doc_text}>
                            <h2 className={baseStyles.blue}>
                                Приветствую вас в клинике Эрдент!
                            </h2>
                            <p>
                                Здравствуйте. Я глав-врач клиники Эрдент - Самидинов Эргазы.
                                Я даю вам гарантию того, что вы получите своевременную и
                                безопасную стоматологическую помощь, так как мы оказываем услуги
                                по самым высоким мировым стандартам.
                                <br/><br/>
                                Для нас важно качественно выполнять свою работу, создавать хорошие
                                и безопасные условия для наших пациентов и дарить вам улыбку
                            </p>
                        </div>
                        <div>

                        </div>
                    </Col>
                    <Col md={6}>
                        <img className={styles.main_doc} src={MainDoctor} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WelcomeServices;