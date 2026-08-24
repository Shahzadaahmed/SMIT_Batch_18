'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Users = () => {
    const [usersData, setUsersData] = useState([]);
    const router = useRouter();

    const fetchAllUsers = async () => {
        const apiUrl = "http://localhost:5050/users/fetch";
        const res = await axios({
            method: "GET",
            url: apiUrl,
            headers: { Authorization: 'ahmed12345' },
        });
        console.log('Res:', res);
        const { status, data } = res;
        status == 200 && setUsersData(data?.data);
    };

    useEffect(() => {
        fetchAllUsers();
    }, []);

    return (
        <div>
            <h1> Users List Screen! </h1>

            <ul>
                {
                    usersData?.map((item: any) => {
                        return (
                            <li key={item._id}>
                                {item.userName}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Users;