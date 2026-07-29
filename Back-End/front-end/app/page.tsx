'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [newUser, setNewUser] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [targetKey, setTargetKey] = useState<string | number>("");

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

    catch (error: any) {
      console.log('Err while fetching all users:', error.response);
      const { status } = error.response;

      if (status == 400) setUsers([]);
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
        setNewUser("");
      }
    }

    catch (error) {
      console.log('Err while adding user:', error);
    }
  }

  const deleteUser = async (index: number) => {
    console.log('Index val:', index);
    try {
      let apiUrl = `http://localhost:5050/api/user/delete/${index}`
      let res = await axios({
        url: apiUrl,
        method: "DELETE"
      });
      console.log(res);
      const { status, data } = res;

      if (status == 200) {
        fetchAllUsers();
      }
    }

    catch (error) {
      console.log('Err while deleting user:', error);
    }
  }

  const editUser = (index: number) => {
    console.log('Index val:', index);
    setIsEdit(true);
    setNewUser(users[index]);
    setTargetKey(index);
  }

  const updateUser = async () => {
    try {
      const apiUrl = "http://localhost:5050/api/user/update";
      let res = await axios({
        url: apiUrl,
        method: "PUT",
        data: {
          key: Number(targetKey),
          newVal: newUser
        }
      });
      console.log('Update user res:', res);
      const { status } = res;
      if (status == 200) {
        fetchAllUsers();
        setIsEdit(false);
        setNewUser("");
        setTargetKey('');
      }
    }

    catch (error: any) {
      console.log('Something went wrong while updating user:', error?.response);
    };
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

      {
        isEdit ? <button onClick={updateUser}> Update User </button> : <button onClick={addUser}> Add User </button>
      }

      <ul>
        {
          users.map((item: string, index: number) => {
            return (
              <li key={index}>
                {item}
                <button onClick={() => deleteUser(index)}> Delete Item </button>
                <button onClick={() => editUser(index)}> Edit Item </button>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default App;