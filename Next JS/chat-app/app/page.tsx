'use client';

import React, { useEffect } from "react";
import { io } from 'socket.io-client';

const socket = io('http://localhost:5050', { autoConnect: false });

const App = () => {

  const submit = () => {
    console.log('Button clicked!');
    socket.emit("read-message" , 'Hello testing 123');
  };

  useEffect(() => {
    socket.connect();
    socket.on('connect', () => {
      console.log('FE socket connected:', socket.id);
    });
  }, []);

  return (
    <div>
      <h1> Web sockets Next SJ with Node JS! </h1>
      <button onClick={submit}> Submit </button>
    </div>
  );
};

export default App;