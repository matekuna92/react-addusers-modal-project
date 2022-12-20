import React, { useState } from 'react';

import Button from '../Button/Button';
import styles from './UserForm.module.css';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';

const UserForm = (props) => {
    const [formUserName, setFormUserName] = useState('');
    const [formUserAge, setFormUserAge] = useState('');

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const userData = {
            name: formUserName,
            age: formUserAge
        };

        console.log(userData);

        if(formUserName.trim().length === 0 || formUserAge.trim().length === 0) {
            return;
        }

        // initialised as string, but age is a number - just a conversion to be safe
        if(+formUserAge < 1) {
            return;
        }

        setFormUserName('');
        setFormUserAge('');
        console.log(formUserName, formUserAge);

        props.onSaveUser(userData);
    }

    const nameChangeHandler = (event) => {
        setFormUserName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setFormUserAge(event.target.value);
    }

    return (
        <div>
            <Modal title='Error occured!' message='Error occured!' />
            <Card className={styles['user-form']}>
                <form onSubmit={formSubmitHandler}>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type='text' value={formUserName} onChange={nameChangeHandler} />
                    <label htmlFor='age'>Age(Years)</label>
                    <input id='age' type='number' value={formUserAge} onChange={ageChangeHandler} />
                    <Button type='submit'> Add User </Button>
                </form>
            </Card>
        </div>
    );
}

export default UserForm;