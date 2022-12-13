import React from 'react';

import User from '../User/User';
import styles from './UserList.module.css';
import Card from '../Card/Card';

const UserList = (props) => {

    return (
        <Card className='users'>
            <ul className='user-list'>
                {props.userList.map(user => (
                    <User
                        key={user.id}
                        name={user.name}
                        age={user.age}
                    >
                        <div> {user.name} <span>({user.age} years old)</span></div>
                    </User>
            ))}
            </ul>
        </Card>
   );
}

export default UserList;