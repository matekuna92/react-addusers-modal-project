import React, { useState } from 'react';

import Button from '../Button/Button';
import styles from './UserForm.module.css';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';
import Wrapper from '../Helpers/Wrapper';

const UserForm = (props) => {
    const [formUserName, setFormUserName] = useState('');
    const [formUserAge, setFormUserAge] = useState('');
    const [error, setError] = useState();       // undefined as initial, no need to pass anything

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const userData = {
            name: formUserName,
            age: formUserAge
        };

        console.log(userData);

        if(formUserName.trim().length === 0 || formUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input.',
                message: 'Please enter a valid name and age.'
            });
            return;
        }

        // initialised as string, but age is a number - just a conversion to be safe
        if(+formUserAge < 1) {
            setError({
                title: 'Invalid age.',
                message: 'Age must be a positive number.'
            });

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

    // change Error object from object to null, so modal wont be rendered, when backdrop or Okay button is clicked
    const errorHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
            {error && <Modal title={error.title} message={error.message} onHandleError={errorHandler} />}
            <Card className={styles['user-form']}>
                <form onSubmit={formSubmitHandler}>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type='text' value={formUserName} onChange={nameChangeHandler} />
                    <label htmlFor='age'>Age(Years)</label>
                    <input id='age' type='number' value={formUserAge} onChange={ageChangeHandler} />
                    <Button type='submit'> Add User </Button>
                </form>
            </Card>
        </Wrapper>
    );
}

export default UserForm;