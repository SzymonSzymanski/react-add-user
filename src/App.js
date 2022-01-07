import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const handleAddUser = (userName, userAge) => {
    setUsersList((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        userName: userName,
        userAge: userAge,
      },
    ]);
  };

  return (
    <>
      <AddUser onAddUser={handleAddUser} />
      <UserList users={usersList} />
    </>
  );
}

export default App;
