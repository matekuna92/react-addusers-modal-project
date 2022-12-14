import React from 'react';

import styles from './NewUser.module.css';
import UserForm from "../UserForm/UserForm";

const NewUser = (props) => {
    const onSaveUserHandler = (enteredUserData) => {
        const userData = {
            ...enteredUserData,
            id: Math.random().toString()
        };

        console.log('userData in new user', userData);
        props.onAddUser(userData);
    }

    return (
        <div className='new-user'>
            <UserForm onSaveUser={onSaveUserHandler} />
        </div>
    );
}

export default NewUser;