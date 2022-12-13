import React from 'react';

import User from '../User/User';
import styles from './UserList.module.css';

const UserList = (props) => {

    return (
        <ul className='user-list'>
            {props.userList.map(user => (
                <User
                    id={user.id}
                    name={user.name}
                    age={user.age}
                >
                <div> {user.name} </div>
                <div> {user.age} </div>
                </User>
        ))}
        </ul>
    );
}

export default UserList;