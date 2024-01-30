import { useNavigate } from 'react-router-dom';

function Welcome({currentUser}) {

  return (
    <div className='welcome-container'>
        <img src={"live-chat.png"} alt="Logo" className='welcome-logo'/>
      {/* <b>Hi, {currentUser.name}</b> */}
        <p>View and text directly to people present in the chatroom</p>
    </div>
  )
}

export default Welcome