import React from 'react';

import Button from '../Button/Button';
import styles from './FormInput.css';

const FormInput = () => {

    const formSubmitHandler = (e) => {
        e.preventDefault();
    }

    const nameChangeHandler = () => {

    }

    const ageChangeHandler = () => {

    }

    return (
        <form onSubmit={formSubmitHandler} className={styles.form}>
            <div className='form-container'>
                <label>Username</label>
                <input type='text' onChange={nameChangeHandler} />
                <label>Age(Years)</label>
                <input type='text' onChange={ageChangeHandler} />

            </div>
            <Button type='submit'> Add User </Button>
        </form>
    );
}

export default FormInput;