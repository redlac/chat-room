import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import { ChatWindow } from './ChatWindow';
const ENDPOINT = "http://localhost:3000";

function App() {
  const [messages, setMessages] = useState([]);
  const [connected, setConnected] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [messageReceived, setMessageReceived] = useState(false);

  const handleChange = (inputType, event) => {
    switch (inputType) {
      case 'name':
        setName(event.target.value);
        break;
      case 'message':
        setMessage(event.target.value);
        break;
    }
  };

  const sendMessage = () => {


    let data = {
      'name': 'user',
      'message': message
    }

    const socket = socketIOClient(ENDPOINT);
    socket.emit('message', data);
 }

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on("connection", data => {
      setConnected(true);
    });

    socket.on("receivedMessage", data => {
      setMessageReceived(false);
      let updatedMessages = messages;
      updatedMessages.push(data);
      setMessages(updatedMessages);
      setMessageReceived(true);
      console.log(messages);
    });

  }, []);

  return (
    <>
      <ChatWindow messages={messages} 
                  handleChange={handleChange} 
                  sendMessage={sendMessage}
                  />
    </>
  );
}

export default App;
