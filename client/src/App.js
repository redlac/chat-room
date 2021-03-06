import React, { useState, useEffect, useRef } from 'react';
import socketIOClient from 'socket.io-client';
import { ChatWindow } from './ChatWindow';
import './scss/chat-window-styles.scss';

//const ENDPOINT = "http://localhost:3000";
const ENDPOINT = "/";

/**
 * Main app component. 
 */
function App() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [messageReceived, setMessageReceived] = useState(false);
  const [nickname, setNickname] = useState('anonymous');
  const [nickNameColor, setNickNameColor] = useState('#000000');

  const bottomMessage = useRef(null);

  // Handle input changes for nickname and messages
  const handleChange = (inputType, event) => {
    switch (inputType) {
      case 'message':
        setMessage(event.target.value);
        break;
      case 'nickname':
        setNickname(event.target.value);
        break;
      default:
        break;
    }
  };

  //Callback when the send message button is clicked
  const sendMessage = () => {

    let data = {
      'name': nickname,
      'message': message
    }

    const socket = socketIOClient(ENDPOINT);
    socket.emit('message', data);
 }

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on("receivedMessage", data => {
      setMessageReceived(false);
      let updatedMessages = messages;
      updatedMessages.push(data);
      setMessages(updatedMessages);
      setMessageReceived(true);
    });

    //Set random nickname color
    setNickNameColor(getRandomColor());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log("new message");
    if (bottomMessage.current != null){
      bottomMessage.current.scrollIntoView();
    }
  }, [messageReceived]);

  return (
    <div className="app-container">
      <h1>Amazing Real-Time Chat</h1>
      <ChatWindow messages={messages} 
                  handleChange={handleChange} 
                  sendMessage={sendMessage}
                  nickNameColor={nickNameColor}
                  nickname={nickname}
                  bottomMessageRef={bottomMessage}
                  />
    </div>
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
