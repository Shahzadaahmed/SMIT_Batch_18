"use client";

import React, { useEffect } from 'react';
import { getCookie, deleteCookie } from 'cookies-next';
import Navbar from '@/src/components/navbar/navbar';

const NextApp = () => {

  // useEffect(() => {
    // const fetchCurrentUser = () => {
    //   onAuthStateChanged(auth, async (user) => {
    //     if (user) {
    //       const authToken = await user.getIdToken();
    //       const fetchSavedToken = getCookie('token');

    //       if (authToken != fetchSavedToken) {
    //         await signOut(auth);
    //         deleteCookie('token');
    //         window.location.reload();
    //       }

    //       else console.log('Token is valid!');
    //     }

    //     else {
    //       console.log('No user is available!');
    //       await signOut(auth);
    //       deleteCookie('token');
    //       window.location.reload();
    //     }
    //   });
    // };

    // fetchCurrentUser();
  // }, []);

  return (
    <div>
      <Navbar />
      <h1> Welcome to Next JS! </h1>
    </div>
  );
};

export default NextApp;