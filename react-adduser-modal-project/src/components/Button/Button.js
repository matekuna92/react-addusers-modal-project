import React from 'react';

import styles from './Button.css';

const Button = (props) => {
    return (
        <button type={props.type} className={styles.btn}>{props.children}</button>
    );
}

export default Button;