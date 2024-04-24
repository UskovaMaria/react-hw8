import { useContext, useState } from "react";
import { UsersContext } from "../context/users";
import { removeUser } from "../context/users";
import { editUser } from "../context/users";

const Users = () => {
  const [users, dispatch] = useContext(UsersContext);


  const [editingUserId, setEditingUserId] = useState(null);
  const [newUserName, setNewUserName] = useState("");

  const startEditing = (id, title) => {
    setEditingUserId(id);
    setNewUserName(title);
  };

  const saveChanges = () => {
    dispatch(editUser({ id: editingUserId, title: newUserName }));
    setEditingUserId(null);
    setNewUserName("");
  };

  const cancelEditing = () => {
    setEditingUserId(null);
    setNewUserName("");
  };

  return (
    <div className="users">
      {users.map((user) => (
        <div key={user.id} className="user">
          {editingUserId === user.id ? (
            <div className="user__input">
              <input
                type="text"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
              />
              <button onClick={saveChanges}>Save</button>
              <button onClick={cancelEditing}>Cancel</button>
            </div>
          ) : (
            <div className="user__item">
              <h3 className="user__title">{user.title}</h3>
              <button onClick={() => startEditing(user.id, user.title)}>Edit</button>
              <button onClick={() => dispatch(removeUser(user))}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Users;

