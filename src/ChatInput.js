import React, { useState } from 'react';
import "./ChatInput.css";
import { useStateValue } from './StateProvider';
import db from "./firebase";
import firebase from "firebase";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState('');
  const [{ user }] = useStateValue();
  console.log(input);

  const sendMessage = (event) => {
    event.preventDefault();

    if (channelId  && input.trim()) {
      db.collection('rooms').doc(channelId).collection('messages').add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImg: user.photoURL,
      });
      setInput('');
    }
  } 

  const handleInputChange = ({ target }) => {
    if (target.value) {
      setInput(target.value)
    }
  };

  return (
    <div className="chatInput">
      <form onSubmit={sendMessage}>
        <input 
          value={input}
          onChange={handleInputChange}
          type="text" 
          placeholder={`Message #${channelName?.toLowerCase()}`}/>
        {/* <button type="submit" onClick={sendMessage}>Send</button> */}
      </form>
    </div>
  )
}

export default ChatInput;
