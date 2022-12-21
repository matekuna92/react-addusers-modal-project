import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';
import Button from "../Button/Button";
import Card from "../Card/Card";

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onHandleError} />;
};

const ModalOverlay = (props) => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2> {props.title} </h2>
            </header>
            <div className={styles.content}>
                <p> {props.message} </p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onHandleError}> Okay </Button>
            </footer>
        </Card>
    );
}

// splitting component into parts (constants)... createPortal with reactDOM: referencing the id created in html as the "portal"
const Modal = (props) => {
    return (
        <>
        {ReactDOM.createPortal(<Backdrop onHandleError={props.onHandleError} />, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onHandleError={props.onHandleError} />, document.getElementById('modal-root'))}
        </>
    );
};

export default Modal;