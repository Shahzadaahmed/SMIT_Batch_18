"use client";

import { useState, useEffect } from "react";
import axios from "axios";

const UsersScreen = () => {
  const [usersData, setUsersData] = useState([]);

  const handleFetchAllUsers = async () => {
    try {
      const apiUrl = "/api/user/fetch/all";
      const res = await axios({
        url: apiUrl,
        method: "GET",
      });
      console.log("Users:", res);
      const { status, data } = res;

      if (status == 200) {
        setUsersData(data?.data);
      }
    } catch (error) {
      console.log("FE fetch all users api err:", error);
    }
  };

  useEffect(() => {
    handleFetchAllUsers();
  }, []);

  return (
    <div>
      <h1> Users Screen! </h1>

      <ul>
        {usersData?.map((item) => {
          return <li key={item?._id}> {item?.userName} </li>;
        })}
      </ul>
    </div>
  );
};

export default UsersScreen;
