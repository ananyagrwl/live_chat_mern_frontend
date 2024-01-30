import { IconButton } from '@mui/material';
// import './myStyles.css';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
// import { MessageOthers } from './MessageOthers';
// import { MessageSelf } from './MessageSelf';
import { useEffect, useState } from 'react';
import { getUser } from '../api/userRequest';
import { addMessage, messageData } from '../api/messageRequest';
import {format} from "timeago.js";
import InputEmoji from "react-input-emoji";
import Welcome from './Welcome';

export const ChatArea = ({ chat, currentUser }) => {

  // clicked User is the user with whom i am going to talk, and i am current user
  const [clickedUser, setClickedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState(""); 

  // fetching user data of the user with whom i am going to talk
  useEffect(() => {
    const clickedUserId = chat?.members?.find((id) => id !== currentUser.id);
    const getclickedUserData = async () => {
      try {
        const data = await getUser(clickedUserId);
        setClickedUser(data);
        console.log("clicked user data in chat area", data);
      } catch (error) {
        console.log(error);
      }
    }
    if (chat !== null) getclickedUserData();
  }, [chat, currentUser.id]);

  // fetching the messages between me and the clicked user
  useEffect(() => {
    const getMessages = async () => {
      try {
        const data = await messageData(chat._id);
        console.log("message data", data);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    }
    if (chat !== null) getMessages();
  }, [chat]);

  const handleChange = (value) => {
    setNewMessage(value);
  }

  const handleSend = async(e) => {
    e.preventDefault();
    const message = {
      chatId: chat._id,
      senderId: currentUser.id,
      text: newMessage,      
    } 
    try {
      const data = await addMessage(message);
      setMessages([...messages, data]);
      setNewMessage("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="chat-area">
      {chat? (<>
      <div className='ch-header'>
        <div className='ch-name'>
          {/* <p className='con-icon'>{clickedUser.name[0]}</p> */}
          <div className='header-text'>
            {/* <p className='con-title'>{clickedUser.name}</p> */}
            <p className='con-timeStamp'>today</p>
          </div>
        </div>
        <div><IconButton><DeleteIcon /></IconButton></div>
      </div>
      <div className='ch-message'>
        {messages.map((message) => (
          <div className={message.senderId === currentUser.id ? "self-message-container" : "other-message-container"}>
            {message.senderId === currentUser.id ? (
              <div className='message-box'>
                <p>{message.text}</p>
                <p className='self-timestamp'>{format(message.createdAt)}</p>
              </div>
            ) : (
              <div className='convo-container'>
                {/* <p className='con-icon'>{clickedUser.name[0]}</p> */}
                <div className='other-text-content'>
                  {/* <p className='con-title'>{clickedUser.name}</p> */}
                  <p className='con-lastMessage'>{message.text}</p>
                  <p className='self-timestamp'>{format(message.createdAt)}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className='ch-textinput'>
        <input placeholder='Type a Message' className='searchbox' value={newMessage} onChange={handleChange}/>
        {/* <InputEmoji placeholder='Type a Message' className='searchbox' value={newMessage} onChange={handleChange}/> */}
        <IconButton><SendIcon onClick={handleSend}/></IconButton>
      </div></>) : (
        <Welcome currentUser={currentUser}/>
      )}
      
    </div>
  )
}
