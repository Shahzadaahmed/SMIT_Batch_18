'use client';

import React, { useEffect } from "react";
import { io } from 'socket.io-client';

const socket = io('http://localhost:5050', { autoConnect: false });

const App = () => {

  useEffect(() => {
    socket.connect();
    socket.on('connect', () => {
      console.log('FE socket connected:', socket.id);
    });

    // Saving users...!
    socket.emit('register', 'user_1');

    // socket.on('welcome', (msgFromServer) => {
    //   console.log('Message received from server:', msgFromServer);
    // })

    // Reading messages...!
    socket.on('read-messages', (msgData) => {
      console.log('Message received FE:', msgData);
    });
  }, []);

  const submit = () => {
    // console.log('Button clicked!');
    // socket.emit("read-message", 'Hello testing 123');

    socket.emit('private-msg', {
      to: 'user_2',
      message: 'Hello i am user 1, How r u ?'
    });
  };

  return (
    <div>
      <h1> Web sockets Next SJ with Node JS! </h1>
      <h2> I am user 1 </h2>
      <button onClick={submit}> Submit </button>
    </div>
  );
};

export default App;