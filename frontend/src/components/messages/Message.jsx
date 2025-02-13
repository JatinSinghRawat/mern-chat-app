import {useAuthContext} from '../../Context/AuthContext.jsx'
import { extractTime } from '../../utils/extractTime.js';
import useConversation from '../../zustand/useConversation.js';
import { useState, useEffect } from 'react';

const Message = ({message}) => {
    const {authUser} = useAuthContext();
    const {selectedConversation} = useConversation();
    const fromMe = message.senderId === authUser._id;
    const fromattedTime = extractTime(message.createdAt)
    const chatClassName = fromMe? 'chat-end' : 'chat-start';
    const profilePic = fromMe? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe? 'bg-blue-500' : 'bg-gray-500';
    const [shake, setShake] = useState(message.shouldShake || false);

    useEffect(() => {
        if (message.shouldShake) {
            setShake(true);
            setTimeout(() => setShake(false), 1000); // Remove shake after 1s
        }
    }, [message.shouldShake]);


    return <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img 
                src={profilePic} 
                alt="user avatar"/>
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor} ${shake ? "shake" : ""} pb-2`}>{message.message}</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{fromattedTime}</div>
    </div>;
}



export default Message;