"use client";

import { useSelector } from "react-redux";

export default function UsersList() {
  const usersList = useSelector((state) => state.users.usersList);

  if (usersList.length === 0) {
    return <p className="empty-users">No users added yet.</p>;
  }

  return (
    <div className="users-list">
      {usersList.map((user) => (
        <article className="user-card" key={user.id}>
          <div className="user-details">
            <h2>{user.username}</h2>
            <p>{user.email}</p>
          </div>
          <div className="user-actions">
            <button className="edit-button" type="button">Edit</button>
            <button className="delete-button" type="button">Delete</button>
          </div>
        </article>
      ))}
    </div>
  );
}
