'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Users = () => {
    const [usersData, setUsersData] = useState([]);
    const router = useRouter();

    const handleViewUser = (user: any) => {
        router.push(`/users/${user.id}`);
    };

    const fetchAllUsers = async () => {
        const apiUrl = "https://jsonplaceholder.typicode.com/users";
        const res = await fetch(apiUrl);
        const actualRes = await res?.json();
        // console.log('Res:', actualRes);
        actualRes && setUsersData(actualRes);
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
                            <li key={item.id}>
                                {item.name}
                                <button onClick={() => handleViewUser(item)}> View user </button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Users;