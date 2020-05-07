import React, { useState, useEffect, useRef } from 'react';
import socketIOClient from 'socket.io-client';
import { ChatWindow } from './ChatWindow';
import './scss/chat-window-styles.scss';

const ENDPOINT = "http://localhost:3000";

function App() {
  const [messages, setMessages] = useState([]);
  const [connected, setConnected] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [messageReceived, setMessageReceived] = useState(false);
  const [nickname, setNickname] = useState('anonymous');
  const [nickNameColor, setNickNameColor] = useState('#000000');

  const bottomMessage = useRef(null);

  const handleChange = (inputType, event) => {
    switch (inputType) {
      case 'name':
        setName(event.target.value);
        break;
      case 'message':
        setMessage(event.target.value);
        break;
      case 'nickname':
        setNickname(event.target.value);
        break;
    }
  };

  const sendMessage = () => {

    console.log(nickname);
    let data = {
      'name': nickname,
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

    //Set random nickname color
    setNickNameColor(getRandomColor());
  }, []);

  useEffect(() => {
    console.log("new message");
    if (bottomMessage.current != null){
      bottomMessage.current.scrollIntoView();
    }
  }, [messageReceived]);

  return (
    <>
      <ChatWindow messages={messages} 
                  handleChange={handleChange} 
                  sendMessage={sendMessage}
                  nickNameColor={nickNameColor}
                  nickname={nickname}
                  bottomMessageRef={bottomMessage}
                  />
    </>
  );
}

/**
 * Get a random hex color value.
 */
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

export default App;
