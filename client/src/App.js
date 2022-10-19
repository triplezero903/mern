import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import User from "./components/User.js";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5678/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, [listOfUsers]);

  const createUser = () => {
    axios
      .post("http://localhost:5678/createUser", {
        name: name,
        age: age,
        username: username,
      })
      .then((response) => {
        alert("사용자 등록 완료");
        setListOfUsers([...listOfUsers, { name, age, username }]);
      });
  };

  return (
    <div className="App">
      <h1>사용자 목록</h1>
      <div className="grid">
        {listOfUsers.map((user) => {
          return (
            <div>
              <User user={user} />
            </div>
          );
        })}
      </div>
      <div className="register">
        <input
          className="input"
          type="text"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className="input"
          type="number"
          placeholder="Age"
          onChange={(event) => setAge(event.target.value)}
        />
        <input
          className="input"
          type="text"
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <button className="button" onClick={createUser}>
          Create User
        </button>
      </div>
    </div>
  );
}

export default App;
