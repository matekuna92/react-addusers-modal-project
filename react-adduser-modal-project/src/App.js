import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList/UserList';
import NewUser from "./components/User/NewUser";

const App = (props) => {

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

    const addUserHandler = (enteredData) => {
        const userData = {
            ...enteredData
        };
        
        console.log('Userdata in app: ', userData);
    }

    return (
      <div>
          <NewUser onAddUser={addUserHandler} />
          <UserList userList={defaultUsers} />
      </div>
    );
}

export default App;
