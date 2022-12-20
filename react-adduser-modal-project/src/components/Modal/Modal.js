import React from 'react';

import styles from './Modal.module.css';
import Button from "../Button/Button";
import Card from "../Card/Card";

const Modal = (props) => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2> {props.title} </h2>
            </header>
            <div className={styles.content}>
                <p> {props.message} </p>
            </div>
            <footer className={styles.actions}>
                <Button> Okay </Button>
            </footer>
        </Card>
    );
};

export default Modal;