'use client';

import React from 'react';
import { useParams } from 'next/navigation';

const ViewUserScreen = () => {
    const { uid } = useParams();
    // console.log(uid);

    return (
        <div>
            <h1> {`User id: ${uid}`} </h1>
        </div>
    );
};

export default ViewUserScreen;