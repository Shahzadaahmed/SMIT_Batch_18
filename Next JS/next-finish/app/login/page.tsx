// 'use client'

// import React from 'react';
// import { setCookie } from 'cookies-next';

// const Login = () => {

//     const handleLogin = () => {
//         setCookie('token', 'abc123');
//     };

//     return (
//         <div>
//             <h1> Login Screen! </h1>

//             <button onClick={handleLogin}> Login </button>
//         </div>
//     );
// };

// export default Login;

"use client"

// import React, { useEffect, useState } from "react"

// const SignUp = () => {

//     const [formState, setFormState] = useState({
//         name: "",
//         email: "",
//         password: "",
//     })
//     const [users, setUsers] = useState([]);

//     const submitForm = () => {
//         const saveUser = {
//             name: formState.name,
//             email: formState.email,
//             password: formState.password,
//         }
//         let copyData = [...users];
//         copyData.push(saveUser);
//         setUsers(copyData);

//         setFormState({
//             name: "",
//             email: "",
//             password: "",
//         })
//     };

//     useEffect(() => {
//         console.log('User added:', users);
//         if (localStorage.getItem('Users') == null) {
//             localStorage.setItem('Users', JSON.stringify([]));
//         }

//         else {
//             localStorage.setItem('Users', JSON.stringify(users));
//         }
//     }, [users]);
//     return (
//         <div>
//             <h1>
//                 Signup Screen
//             </h1>
//             Name:
//             <input
//                 type="text"
//                 placeholder="Enter Your Name"
//                 value={formState.name}
//                 onChange={(e) => { setFormState({ ...formState, name: e.target.value }) }}
//             />
//             Email:<input type="email" placeholder="Enter Your Email"
//                 value={formState.email}
//                 onChange={(e) => { setFormState({ ...formState, email: e.target.value }) }}
//             />
//             Password:<input type="password" placeholder="*********"
//                 value={formState.password}
//                 onChange={(e) => { setFormState({ ...formState, password: e.target.value }) }}
//             />
//             <button onClick={submitForm}>Signup</button>
//         </div>
//     )
// }
// export default SignUp;





import React from 'react';
import axios from 'axios';
import { loadStripe } from "@stripe/stripe-js";

const stripeSecret = "pk_test_51T5wFfFpwbFPjMDnZici1c6kfqwYIabxBOogSmCXhO5Efc3Wf06FZhLpfkVqTvoiie9XIIXDoeQUdlZPSwQIdwg7007iKv9uOL";

const CheckoutScreen = () => {

    const productData = [
        {
            productName: "Blue jacket",
            productPrice: 50,
            productImage: "https://www.angeljackets.com/product_images/q/805/blue_leather_cafer_racer_jacket__91491_thumb.webp",
            productQuantity: 2
        },
        {
            productName: "Black jacket",
            productPrice: 60,
            productImage: "https://www.angeljackets.com/product_images/y/148/hooded_leather_jacket_womens_blue__54478_thumb.webp",
            productQuantity: 1
        }
    ]

    const handleCheckout = async () => {
        try {
            await loadStripe(stripeSecret);
            const apiUrl = "http://localhost:5050/check-out/session";
            const res = await axios({
                method: "POST",
                url: apiUrl,
                data: {
                    items: productData
                }
            });
            console.log('Payment res: ', res);
        }

        catch (error) {
            console.log('Err in payment integration:', error);
        }
    };

    return (
        <div>
            <h1> Checkout Screen! </h1>
            <button onClick={handleCheckout}> Checkout </button>
        </div>
    );
};

export default CheckoutScreen;