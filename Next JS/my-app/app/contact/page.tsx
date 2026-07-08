'use client';

import React, { useEffect, useState } from 'react';
import { getDocs, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/src/utils/firebase';

const ContactScreen = () => {
  const [users, setUsers] = useState([]);

  const delUser = (userData: any) => {
    console.log(userData);
    deleteDoc(doc(db, "Users", userData.docId))
      .then(() => {
        console.log('User deleted successfully!');
      })
      .catch((err) => {
        console.log('Err while deleting user:', err);
      })
      .finally(() => {
        fetchUsersFromDB();
      });
  };

  const updateUser = async (userData: any) => {
    console.log(userData);

    const docRef = doc(db, 'Users', userData.docId);
    await updateDoc(
      docRef,
      {
        email: "test@gmail.com",
        password: 'test123'
      }
    );
  };

  const fetchUsersFromDB = async () => {
    const getUsers = await getDocs(collection(db, 'Users'));
    // console.log('DB Users:', getUsers);

    let targetData: any = [];

    getUsers.forEach((eachUser) => {
      // console.log(eachUser.id, '--', eachUser.data());

      const obj = {
        ...eachUser.data(),
        docId: eachUser.id
      };
      targetData.push(obj);
    });
    targetData && setUsers(targetData);
  };

  useEffect(() => {
    fetchUsersFromDB();
  }, []);

  return (
    <div>
      <h1> Contact Screen! </h1>

      <ul>
        {
          users.map((item: any) => {
            return (
              <li key={item.uid} style={{ marginTop: '3%' }}>
                {item.email.slice(0, item.email.indexOf('@'))}
                <button onClick={() => delUser(item)}> Delete Item </button>
                <button onClick={() => updateUser(item)}> Update Item </button>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default ContactScreen;