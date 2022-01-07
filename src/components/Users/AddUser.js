import { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const handleAddUser = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Set valid name and age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Set valid age",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const handleChangeUsername = (e) => {
    setEnteredUsername(e.target.value);
  };

  const handleChangeAge = (e) => {
    setEnteredAge(e.target.value);
  };

  const handleError = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={handleError}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={handleAddUser}>
          <label htmlFor="username">Username</label>
          <input
            onChange={handleChangeUsername}
            value={enteredUsername}
            type="text"
            id="username"
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            onChange={handleChangeAge}
            value={enteredAge}
            type="number"
            id="age"
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
