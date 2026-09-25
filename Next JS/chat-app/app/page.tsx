'use client';

import React, { useEffect, useState } from "react";
import { io } from 'socket.io-client';

const socket = io('http://localhost:5050', { autoConnect: false });

const App = () => {

  const [input, setInput] = useState('');
  const [allMessages, setAllMessages] = useState<any[]>([]);

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

      // const allMsgsClone = [...allMessages];
      // allMsgsClone.push({
      //   from: msgData?.from,
      //   to: '',
      //   message: msgData?.message
      // });
      // setAllMessages(allMsgsClone);

      setAllMessages((prev) => [
        ...prev,
        {
          from: msgData?.from,
          to: '',
          message: msgData?.message
        }
      ]);
    });
  }, []);

  const submit = () => {
    // console.log('Button clicked!');
    // socket.emit("read-message", 'Hello testing 123');

    socket.emit('private-msg', {
      to: 'user_2',
      message: input
    });

    // const allMsgsClone = [...allMessages];
    // allMsgsClone.push({
    //   from: 'user_1',
    //   to: 'user_2',
    //   message: input
    // });
    // setAllMessages(allMsgsClone);
    setAllMessages((prevMsgs: any[]) =>
      [
        ...prevMsgs,
        {
          from: 'user_1',
          to: 'user_2',
          message: input
        }
      ]
    );
    setInput('');
  };

  return (
    <div>
      <h1> Web sockets Next SJ with Node JS! </h1>
      <h2> I am user 1 </h2>

      <hr />
      <input
        type="text"
        placeholder="Write Something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={submit}> Add </button>

      <ul>
        {
          allMessages.map((item, index) => {
            return (
              <li key={index}> {item?.message} </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default App;