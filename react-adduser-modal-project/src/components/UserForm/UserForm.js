import React, { useState } from 'react';

import Button from '../Button/Button';
import styles from './UserForm.module.css';
import Card from '../Card/Card';

const UserForm = (props) => {
    const [formUserName, setFormUserName] = useState('');
    const [formUserAge, setFormUserAge] = useState('');
    const [isEmptyInput, setIsEmptyInput] = useState(true);

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const userData = {
            name: formUserName,
            age: formUserAge
        };

        console.log(userData);

        if(formUserName.trim().length > 0 && formUserAge.trim().length > 0) {
            setIsEmptyInput(false);
        }
        else {
            setIsEmptyInput(true);
        }
        console.log('isEmptyInput', isEmptyInput);

        props.onSaveUser(userData);

    }

    const nameChangeHandler = (event) => {
        setFormUserName(event.target.value);

        if(event.target.value.length > 0) {
            setIsEmptyInput(false);
        }
        else {
            setIsEmptyInput(true);
        }
    }

    const ageChangeHandler = (event) => {
        setFormUserAge(event.target.value);

        if(event.target.value.length > 0) {
            setIsEmptyInput(false);
        }
        else {
            setIsEmptyInput(true);
        }
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