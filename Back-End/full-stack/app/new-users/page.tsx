// Server actions...!

'use client';

import React, { useEffect } from 'react';
import { fetchAllNewUsers } from '../actions';

const NewUsers = () => {

    const fetchData = async () => {
        const users = await fetchAllNewUsers();
        console.log('Users:', users?.users);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1> New Users Screen! </h1>
        </div>
    );
};

export default NewUsers;




// Actual use of server components...!


// import React from 'react';

// const NewUsers = async () => {

//     const apiUrl = "https://jsonplaceholder.typicode.com/users";
//     const res = await fetch(apiUrl);
//     const actualData = await res.json();
//     console.log('Users:', actualData);

//     return (
//         <div>
//             <h1> Actual use of server components </h1><ul>
//                 {
//                     actualData?.map((item: any) => {
//                         return (
//                             <li key={item.id}>
//                                 {item.name}
//                             </li>
//                         )
//                     })
//                 }
//             </ul>
//         </div>
//     );
// };

// export default NewUsers;