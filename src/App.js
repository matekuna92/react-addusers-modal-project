import React, { useState } from 'react';

import './App.css';
import UserList from './components/UserList/UserList';
import NewUser from "./components/User/NewUser";

let defaultUsers = [
    {
        "id":1,
        "name":"Thom Jones",
        "age": 31
    },
    {
        "id":2,
        "name":"Adam Smith",
        "age": 40
    },
    {
        "id":3,
        "name":"Jake Blaer",
        "age": 31
    },
    {
        "id":4,
        "name":"Olivia Reel",
        "age": 25
    },
    {
        "id":5,
        "name":"Sylvia Big",
        "age": 28
    }
];

const App = () => {
    const [users, setUsers] = useState(defaultUsers);
    
    const addUserHandler = user => {
        setUsers(prevUsers => {
            return [user, ...users];
        });
    }

    // <> === <React.Fragment> depends if project setup supports the first syntax or not
    return (
      <>
          <NewUser onAddUser={addUserHandler} />
          <UserList userList={users} />
      </>
    );
}

export default App;
