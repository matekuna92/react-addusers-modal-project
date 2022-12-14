import React, { useState } from 'react';

import Button from '../Button/Button';
import styles from './UserForm.module.css';
import Card from '../Card/Card';

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
        props.onSaveUser(userData);

    }

    const nameChangeHandler = (event) => {
        setFormUserName(event.target.value);
        console.log(formUserName);
    }

    const ageChangeHandler = (event) => {
        setFormUserAge(event.target.value);
        console.log(formUserAge);
    }

    return (
        <Card className='form-container'>
            <form onSubmit={formSubmitHandler}>
                <label>Username</label>
                <input type='text' onChange={nameChangeHandler} />
                <label>Age(Years)</label>
                <input type='text' onChange={ageChangeHandler} />
                <Button type='submit'> Add User </Button>
            </form>
        </Card>
    );
}

export default UserForm;