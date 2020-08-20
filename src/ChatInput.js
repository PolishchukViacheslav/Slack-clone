import React, { useState } from 'react';
import "./ChatInput.css";
import { useStateValue } from './StateProvider';
import db from "./firebase";
import firebase from "firebase";

function ChatInput({ channelName, channelId, scroll }) {
  const [input, setInput] = useState('');
  const [{ user }] = useStateValue();
  console.log(input);

  const sendMessage = (event) => {
    event.preventDefault();

    if (channelId && input.trim()) {
      console.log('input', input);
      db.collection('rooms').doc(channelId).collection('messages').add({
        message: input.trim(),
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImg: user.photoURL,
      });
      setInput('');
      setTimeout(() => scroll(), 200);
    }
  } 

  const handleInputChange = ({ target }) => {
      setInput(target.value)
  };

  return (
    <div className="chatInput">
      <form onSubmit={sendMessage}>
        <input 
          value={input}
          onChange={handleInputChange}
          type="text" 
          placeholder={`Message #${channelName?.toLowerCase()}`}/>
      </form>
    </div>
  )
}

export default ChatInput;
