'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [newUser, setNewUser] = useState("");

  const fetchAllUsers = async () => {
    try {
      let apiUrl = "http://localhost:5050/api/users";
      let res = await axios({
        url: apiUrl,
        method: "GET"
      });
      console.log('Api res:', res);
      const { status, data } = res;

      if (status == 200) {
        setUsers(data?.data);
      }
    }

    catch (error) {
      console.log('Err while fetching all users:', error);
    };
  };

  const addUser = async () => {
    try {
      let apiUrl = "http://localhost:5050/api/user/add";
      let res = await axios({
        url: apiUrl,
        method: "POST",
        data: { user: newUser }
      });
      console.log(res);
      const { status, data } = res;

      if (status == 200) {
        fetchAllUsers();
      }
    }

    catch (error) {
      console.log('Err while adding user:', error);
    }
  }

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div>
      <h1> CRUD Api Integration </h1>

      {users.length == 0 && <h3> No data available! </h3>}

      <input
        type="text"
        placeholder='Enter user name'
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
      />

      <button onClick={addUser}> Add User </button>

      <ul>
        {
          users.map((item: string, index: number) => {
            return <li key={index}> {item} </li>
          })
        }
      </ul>
    </div>
  );
};

export default App;