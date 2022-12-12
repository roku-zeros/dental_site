import React from "react";
import Container from "react-bootstrap/Container";
import {Row, Col, Stack, Card} from "react-bootstrap";

import styles from './Welcome.module.css'
import baseStyles from '../../index.module.css'
import Button from "react-bootstrap/Button";

const Welcome = () => {
    return (
        <div className={styles.welcome_wrapper}>
            <Container>
                <div className={styles.welcome_text}>
                    <h1 className={baseStyles.blue}>Красивая улыбка меняет Всё!</h1>
                    <p className={baseStyles.grey + ' ' + baseStyles.phone_hide}>Самое качественное обслуживание<br/>
                        <span className={baseStyles.blue}>
                             с нашими опытными врачами
                         </span>
                    </p>
                </div>

                <div className={styles.welcome_content}>
                    <div className={baseStyles.white_wrapper}>
                        <p className={baseStyles.grey}>Запишись на консультацию и <br/>
                            <span className={baseStyles.blue}>
                                    получи бесплатную диагностику зубов
                                </span>
                        </p>
                        <Stack direction="horizontal" gap={3}>
                            <a href='#'>
                                <Button variant="outline-primary">+996 226 262 626</Button>
                            </a>
                            <a href='#'>
                                <Button>Записаться</Button>
                            </a>
                        </Stack>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Welcome;