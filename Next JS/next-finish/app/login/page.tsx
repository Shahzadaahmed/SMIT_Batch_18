'use client'

import React from 'react';
import { setCookie } from 'cookies-next';

const Login = () => {

    const handleLogin = () => {
        setCookie('token', 'abc123');
    };

    return (
        <div>
            <h1> Login Screen! </h1>

            <button onClick={handleLogin}> Login </button>
        </div>
    );
};

export default Login;