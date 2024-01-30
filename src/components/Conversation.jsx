import { useEffect, useState } from 'react'
import { getUser } from '../api/userRequest';

export const Conversation = ({data, currentUserId}) => {
    const [otherUser, setOtherUser] = useState(null);

    useEffect(() => {

        const otherUserId = data.members.find((id)=>id!=currentUserId);
        // const otherUserId = data.members[1];
        console.log("otherUserId",otherUserId);

        const getotherUserData = async()=>{
          try {
            const data = await getUser(otherUserId);
            setOtherUser(data);
          } catch (error) {
            console.log(error);
          }
        }
        getotherUserData();

    }, [])
    
  return (
    <div className='convo-container' >
        <p className='con-icon'>{otherUser?.name[0]}</p>
        <p className='con-title'>{otherUser?.name}</p>
        <p className='con-lastMessage'>heyy</p>
        <p className='con-timeStamp'>today</p>
    </div>
  )
}
