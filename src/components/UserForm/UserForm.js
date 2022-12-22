import React, { useState, useRef } from 'react';

import Button from '../Button/Button';
import styles from './UserForm.module.css';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';
import Wrapper from '../Helpers/Wrapper';

const UserForm = (props) => {
    const nameInputRef = useRef();              // create connection between the rendered html element and other JS code
    const ageInputRef = useRef();               // connect ref with the rendered JSX element, storing the JSX element in the ageInputRef constant
                                                // this object will always have a 'current' property, which holds its value
    const [error, setError] = useState();       // undefined as initial, no need to pass anything

    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log(nameInputRef, ageInputRef);
        console.log('name ref value:', nameInputRef.current.value);

        const enteredName = nameInputRef.current.value;     // storing ref values in constant, we can access them without having to log every keystroke onChange
        const enteredAge = ageInputRef.current.value;

        const userData = {
            name: enteredName,
            age: enteredAge
        };

        console.log(userData);

        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input.',
                message: 'Please enter a valid name and age.'
            });
            return;
        }

        // initialised as string, but age is a number - just a conversion to be safe
        if(+enteredAge < 1) {
            setError({
                title: 'Invalid age.',
                message: 'Age must be a positive number.'
            });

            return;
        }

        props.onSaveUser(userData);
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
                    <input id='username' type='text' ref={nameInputRef} />
                    <label htmlFor='age'>Age(Years)</label>
                    <input id='age' type='number' ref={ageInputRef} />
                    <Button type='submit'> Add User </Button>
                </form>
            </Card>
        </Wrapper>
    );
}

export default UserForm;