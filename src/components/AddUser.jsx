import { useContext } from "react";
import { UsersContext, addUser } from "../context/users";

const AddUser = () => {
  const [users, dispatch] = useContext(UsersContext);

  const clickHandler = () => {
    const id = users[users.length - 1].id + 1;

    dispatch(addUser({
      id,
      title: `User ${id}`,
    }));
  }

  return (
    <button onClick={ clickHandler }>Add user</button>
  );
};

export default AddUser;