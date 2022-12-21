import React from "react";
import Container from "react-bootstrap/Container";
import DOMPurify from 'dompurify'
import {Row, Col, Stack, Card, Carousel} from "react-bootstrap";

import MainDoctor from '../../assets/images/main-doc.jpg'
import styles from './MyMap.module.css'
import baseStyles from '../../index.module.css'

import photo from '../../assets/images/adilet.jpg'
import {render} from "react-dom";
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";


const MyMap = () => {
    const defaultState = {
        center: [55.751574, 37.573856],
        zoom: 5,
    };


    return (
        <div className={styles.my_map}>
            <Container>
                <Row>
                    <Col md={{span: 6, offset: 3}}>
                        <div className={styles.map_wrapper}>
                            <h2 className={baseStyles.blue}>Мы находимся тут</h2>
                            <YMaps>
                                <Map defaultState={defaultState}>
                                    <Placemark geometry={[55.684758, 37.738521]}/>
                                </Map>
                            </YMaps>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MyMap;