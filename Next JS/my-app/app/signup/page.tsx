'use client';

import React, { useState } from 'react';
import { auth, db } from "@/src/utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from 'firebase/firestore';
import styles from "../login/login.module.css";

const SignUp = () => {

    const [formStates, setFormStates] = useState({
        email: "",
        password: ''
    });

    const submit = async () => {

        const saveUser = await createUserWithEmailAndPassword(
            auth,
            formStates.email,
            formStates.password
        );
        console.log('User res: ', saveUser);

        const obj = {
            uid: saveUser?.user?.uid,
            email: formStates.email,
            password: btoa(formStates.password)
        }

        // Saving data in DB...!
        if (saveUser) {
            const saveUser = await addDoc(collection(db, 'Users'), obj);
            console.log('User saved: ', saveUser);
        };

        setFormStates({
            email: "",
            password: ""
        });
    };

    return (
        <div>
            <h1 className={styles.head}> Sign Up Screen! </h1>

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

            <button onClick={submit}> Save User </button>
        </div>
    )
}

export default SignUp;