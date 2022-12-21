import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import DOMPurify from 'dompurify'
import {Row, Col, Stack, Card, Carousel} from "react-bootstrap";

import MainDoctor from '../../assets/images/main-doc.jpg'
import styles from './Safety.module.css'
import baseStyles from '../../index.module.css'
import Image from '../../assets/images/safety.png'
import {render} from "react-dom";


export default class Safety extends Component {
    render() {
        let width = window.innerWidth;
        if (width < 500) {
            return (
                <div className={styles.safety_wrapper}>
                    <Container>
                        <Row>
                            <Col md={6}>
                                <h1 className={baseStyles.blue}>
                                    Безопасность и гарантии качества
                                </h1>
                                <img src={Image}/>
                            </Col>
                            <Col md={6}>
                                <div className={styles.safety_text}>
                                    <p>
                                        При лечении, удалении и восстановлении зубов используются щадящие технологии
                                        и препараты, помогающие свести к минимуму любой дискомфорт.
                                        <br/><br/>
                                        Предусмотрено использование премедикации, чтобы избавить пациентов от
                                        тревоги, помочь расслабиться и успокоиться при подготовке к процедуре, а
                                        лечение под наркозом позволяет за один визит пролечить до 5 зубов, что
                                        особенно актуально для детей.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        } else {
            return (
                <div className={styles.safety_wrapper}>
                    <Container>
                        <Row>
                            <Col md={5}>
                                <div className={styles.img_wrapper}>
                                    <img src={Image}/>
                                </div>
                            </Col>
                            <Col md={1}></Col>
                            <Col md={6}>
                                <div className={styles.safety_text}>
                                    <h2 className={baseStyles.blue}>
                                        Безопасность и гарантии качества
                                    </h2>
                                    <p>
                                        При лечении, удалении и восстановлении зубов используются щадящие технологии
                                        и препараты, помогающие свести к минимуму любой дискомфорт.
                                        <br/><br/>
                                        Предусмотрено использование премедикации, чтобы избавить пациентов от
                                        тревоги, помочь расслабиться и успокоиться при подготовке к процедуре, а
                                        лечение под наркозом позволяет за один визит пролечить до 5 зубов, что
                                        особенно актуально для детей.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        }
    }
};
