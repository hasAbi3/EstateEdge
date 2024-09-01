import { useState } from 'react';
import './chat.scss';

function Chat (){
    const [chat, setChat] = useState(true);

    return(
        <div className="chat">
            <div className="messages">
                <h1>Messages</h1>
                <div className="message">
                    <img src = "https://www.clipartmax.com/png/small/314-3143704_profile-clipart-john-doe-person.png" alt = ""></img>
                    <span>John Doe</span>
                    <p>
                        THis is abisha.
                    </p>
                </div>
                <div className="message">
                    <img src = "https://www.clipartmax.com/png/small/314-3143704_profile-clipart-john-doe-person.png" alt = ""></img>
                    <span>John Doe</span>
                    <p>
                        THis is abisha.
                    </p>
                </div>
                <div className="message">
                    <img src = "https://www.clipartmax.com/png/small/314-3143704_profile-clipart-john-doe-person.png" alt = ""></img>
                    <span>John Doe</span>
                    <p>
                        THis is abisha.
                    </p>
                </div>
                <div className="message">
                    <img src = "https://www.clipartmax.com/png/small/314-3143704_profile-clipart-john-doe-person.png" alt = ""></img>
                    <span>John Doe</span>
                    <p>
                        THis is abisha.
                    </p>
                </div>
                <div className="message">
                    <img src = "https://www.clipartmax.com/png/small/314-3143704_profile-clipart-john-doe-person.png" alt = ""></img>
                    <span>John Doe</span>
                    <p>
                        THis is abisha.
                    </p>
                </div>
                <div className="message">
                    <img src = "https://www.clipartmax.com/png/small/314-3143704_profile-clipart-john-doe-person.png" alt = ""></img>
                    <span>John Doe</span>
                    <p>
                        THis is abisha.
                    </p>
                </div>
            </div>
            {chat && (<div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src = "https://www.clipartmax.com/png/small/314-3143704_profile-clipart-john-doe-person.png" alt = ""/>
                        JOhn Doe
                    </div>
                    <span className='close' onClick={()=> setChat(null)}>X</span>
                </div>
                <div className="center">
                    <div className="chatMessages">
                        <p>Random mEesage</p>
                        <span> 1hour ago</span>
                    </div>
                    <div className="chatMessages own">
                        <p>Random mEesage</p>
                        <span> 1hour ago</span>
                    </div>
                    <div className="chatMessages">
                        <p>Random mEesage</p>
                        <span> 1hour ago</span>
                    </div>
                    <div className="chatMessages own">
                        <p>Random mEesage</p>
                        <span> 1hour ago</span>
                    </div>
                    <div className="chatMessages">
                        <p>Random mEesage</p>
                        <span> 1hour ago</span>
                    </div>
                </div>
                <div className="bottom">
                    <textarea></textarea>
                    <button> Send </button>
                </div>
                
            </div>)}

        </div>
    )


}

export default Chat;