import React from 'react';

import styles from './User.module.css';

const User = (props) => {

    return (
        <li className='user'>
            {props.children}
        </li>
    );
}

export default User;