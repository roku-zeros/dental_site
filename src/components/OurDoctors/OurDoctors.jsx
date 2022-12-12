import React from "react";
import Container from "react-bootstrap/Container";
import {Row, Col, Stack, Card} from "react-bootstrap";

import MainDoctor from '../../assets/images/main-doc.jpg'
import styles from './OurDoctors.module.css'
import baseStyles from '../../index.module.css'


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
            </Container>
        </div>
    );
};

export default OurDoctors;