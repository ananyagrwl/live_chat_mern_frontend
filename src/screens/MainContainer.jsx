// import './myStyles.css';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import Welcome from '../components/Welcome';
import { ChatArea } from '../components/ChatArea';
import { useSelector } from 'react-redux';
import { userChats } from '../api/chatRequest';

export const MainContainer = () => {

  const [convo, setConvo] = useState([]);  // convo means chat, means user ki sari logo jisse baat kri h
  const [currentChat, setCurrentChat] = useState(null);
  
  // loggged in user data
  const userData = useSelector((state) => ({
    name: state.user.name,
    email: state.user.email,
    id: state.user.id
  }));
  console.log("User data", userData);
  
  useEffect(()=>{
    const getChats = async()=>{
      try {
        const data = await userChats(userData.id);
        setConvo(data);
        console.log("sidebar convo area data",data);
      } catch (error) {
        console.log("Error fetching chats");
      }
    }
    getChats();
  },[userData.id])

  return (
    <div className="main-container">
        <Sidebar convo={convo} userData={userData} currentChat={currentChat} setCurrentChat={setCurrentChat}/>
        {console.log("current chat data", currentChat)}
        {/* <Outlet/> */}
        {/* <Welcome/> */}
        <ChatArea chat={currentChat} currentUser={userData}/>
    </div>
  )
}
