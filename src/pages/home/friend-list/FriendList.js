import React, { useState, useEffect } from "react";
import { getUsers } from "../../../api/api";

const FriendList = props => {
  const [users, setUsers] = useState({ users: [] });

  useEffect(() => {
    handleUsers();
  }, []);

  const handleUsers = async () => {
    let response = await getUsers();
    setUsers({ users: response });
  };

  const renderUserList = () => {
    return users.users.map(user => {
      return (
        <p
          onClick={() => props.startConversation(user.id, user.name)}
          className="user"
          key={user.id}
        >
          {user.name}
        </p>
      );
    });
  };

  return (
    <div className="FriendList">
      <h3>User List</h3>
      {renderUserList()}
    </div>
  );
};

export default FriendList;
