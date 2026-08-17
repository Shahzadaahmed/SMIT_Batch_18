'use client';

import React from 'react';
import { setCookie } from "cookies-next";

const ProfileScreen = () => {
  return (
    <div>
      <h1> Profile Screen! </h1>
      <button onClick={() => setCookie('token', 'ahmed123')}> Save Data </button>
    </div>
  );
};

export default ProfileScreen;