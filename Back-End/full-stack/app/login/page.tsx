'use client';

import React, { useState } from 'react';
import { setCookie } from 'cookies-next';
import axios from "axios";

const LogIn = () => {

    const [formStates, setFormStates] = useState({
        email: "",
        password: ''
    });

    const submit = async () => {
        const apiUrl = "http://localhost:5050/login";

        try {
            let res = await axios({
                method: "POST",
                url: apiUrl,
                data: formStates
            });
            console.log("Login res:", res);

            const { status, data } = res;

            if (status == 200) {
                console.log("Login success");

                // Saving token in cookie...!
                setCookie('token', data.token, { maxAge: 60 * 60 * 3 });

                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            }
        }

        catch (error) {
            console.log('Err while login user:', error);
        };
    };

    return (
        <div>
            <h1> Log In Screen! </h1>

            <input
                type="email"
                placeholder='Enter email'
                value={formStates.email}
                onChange={(e) => setFormStates({ ...formStates, email: e.target.value })}
            />

            <input
                type="password"
                placeholder='*****'
                value={formStates.password}
                onChange={(e) => setFormStates({ ...formStates, password: e.target.value })}
            />

            <button onClick={submit}> Login User </button>
        </div>
    )
}

export default LogIn;