import React from "react";
import Container from "react-bootstrap/Container";
import {Row, Col, Stack, Card} from "react-bootstrap";

import styles from './Comments.module.css'
import baseStyles from '../../index.module.css'
import Button from "react-bootstrap/Button";
import photo from '../../assets/icons/person-fill.svg'

const Comments = () => {
    return (
        <div className={styles.comment_wrapper}>
            <Container>
                <div className={styles.comment}>
                    <div className={styles.comment_header}>
                        <div className={styles.comment_img}>
                            <img src={photo}/>
                        </div>
                    </div>
                    <div className={styles.comment_context}>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Comments;