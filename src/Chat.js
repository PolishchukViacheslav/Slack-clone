import React, { useState, useEffect, useRef } from 'react';
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from "./firebase";
import Message from './Message';
import ChatInput from './ChatInput';

function Chat() {
  const chatBottom = useRef(null)
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  const scrollChatBottom = () => {
    console.log('inside', chatBottom);
    chatBottom.current.scrollIntoView({behavior: "smooth"})
  };

  useEffect(() => {
    if (chatBottom.current) {
      setTimeout(() => scrollChatBottom(), 3000);
    }
  }, [])


  useEffect(() => {
    if (roomId) {
      db.collection("rooms").doc(roomId)
        .onSnapshot(snapshot => (
          setRoomDetails(snapshot.data())
        ));
    }

    db.collection("rooms").doc(roomId)
    .collection("messages")
    .orderBy("timestamp", "asc")
    .onSnapshot(snapshot => (
      setRoomMessages(snapshot.docs.map(doc => doc.data()))
      ));

    if (chatBottom.current) {
      setTimeout(() => scrollChatBottom(), 200);
    }

  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat__headeRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {roomMessages.map(({message, timestamp, user, userImg}) => {
          console.log(userImg);
          return (<Message
            key={timestamp}
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImg}
          />);
        })}
        <div ref={chatBottom} className="scroll" />
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} scroll={scrollChatBottom} />
    </div>
  )
}

export default Chat;

