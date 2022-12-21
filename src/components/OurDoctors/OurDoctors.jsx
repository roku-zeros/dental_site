import React from "react";
import Container from "react-bootstrap/Container";
import {Row, Col, Stack, Card, Carousel} from "react-bootstrap";

import MainDoctor from '../../assets/images/main-doc.jpg'
import styles from './OurDoctors.module.css'
import baseStyles from '../../index.module.css'

import photo from '../../assets/images/adilet.jpg'

import {doctorsFour} from './doctors';
import {items} from "../MyNavbar/items";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";


const OurDoctors = () => {
    return (
        <div className={styles.our_doctors}>
            <Container>
                <div className={styles.doctors_tittle}>
                    <h2 className={baseStyles.white + ' ' + styles.centered_text}>
                        Наши врачи
                    </h2>
                    <p className={baseStyles.white + ' ' + styles.centered_text}>
                        Наши врачи имеют в среднем 15-летний опыт работы и <br/>
                        рейтинг удовлетворенности 98%, они действительно выделяют нас!
                    </p>
                </div>

                <Carousel>
                    {doctorsFour.map((doctor, idx) => (
                        <Carousel.Item className={styles.cards_wrapper}>
                            <Row>
                                <Stack direction="horizontal" gap={3}>
                                    <Card style={{width: '25%'}}>
                                        <Card.Img variant="top" src={photo}/>
                                        <Card.Body>
                                            <Card.Title>{doctor[0].name}</Card.Title>
                                            <Card.Text>
                                                {doctor[0].role}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Stack>
                        </Row>
                        </Carousel.Item>
                        ))}
                </Carousel>
            </Container>
        </div>
    );
};

export default OurDoctors;