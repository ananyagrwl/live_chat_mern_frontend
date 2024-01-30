import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
// import { ConvoItem } from './ConvoItem';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Conversation } from './Conversation';

export const Sidebar = ({convo, userData, currentChat, setCurrentChat}) => {
    const navigate = useNavigate();
    const nav = useNavigate();

    return (
        <div className="sidebar">
            <div className="sb-header">
                <div>
                    <IconButton onClick={() => { nav("/app/welcome"); }}><AccountCircleIcon /></IconButton>
                </div>
            </div>
            <div className="sb-search">
                <IconButton><SearchIcon /></IconButton>
                <input placeholder='search' className='searchbox' />
            </div>
            <div className="sb-convo">
                {convo.map((convo)=>(
                    <div onClick={()=>{setCurrentChat(convo)}}>
                        <Conversation data={convo} currentUserId={userData.id}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
