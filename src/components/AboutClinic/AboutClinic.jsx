import React from "react";
import Container from "react-bootstrap/Container";
import DOMPurify from 'dompurify'
import {Row, Col, Stack, Card, Carousel} from "react-bootstrap";

import MainDoctor from '../../assets/images/main-doc.jpg'
import styles from './AboutClinic.module.css'
import baseStyles from '../../index.module.css'
import Image from '../../assets/images/about-doctor.png'


const AboutClinic = () => {
    return (
        <div className={styles.about_clinic_wrapper}>
            <Container>
                <Row>
                    <Row>
                        <Col md={7}>
                            <div className={styles.about_text}>
                                <h1 className={baseStyles.blue}>
                                    О нашей клинике
                                </h1>
                                <br/>
                                <p>
                                    В наших отделениях можно получить консультацию
                                    специалистов как самых востребованных,
                                    так и достаточно редких стоматологических направлений,
                                    что позволяет решить большинство стоматологических
                                    вопросов за одно посещение.
                                </p>
                            </div>
                        </Col>
                        <Col md={5}>
                            <div className={styles.img_wrapper}>
                                <img src={Image} />
                            </div>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </div>
    );
};

export default AboutClinic;