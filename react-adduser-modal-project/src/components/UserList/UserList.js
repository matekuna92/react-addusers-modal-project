import React from 'react';
import User from '../User/User';

const UserList = (props) => {

    return (
        <ul className='user-list'>
            {props.userList.map(user => (
                <User
                    id={user.id}
                    name={user.name}
                    age={user.age}
                >
                <p> {user.name} </p>
                <p> {user.age} </p>
                </User>
        ))}
        </ul>
    );
}

export default UserList;