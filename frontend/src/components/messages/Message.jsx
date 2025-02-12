import {useAuthContext} from '../../Context/AuthContext.jsx'
import { extractTime } from '../../utils/extractTime.js';
import useConversation from '../../zustand/useConversation.js';

const Message = ({message}) => {
    const {authUser} = useAuthContext();
    const {selectedConversation} = useConversation();
    const fromMe = message.senderId === authUser._id;
    const fromattedTime = extractTime(message.createdAt)
    const chatClassName = fromMe? 'chat-end' : 'chat-start';
    const profilePic = fromMe? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe? 'bg-blue-500' : 'bg-gray-500';


    return <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img 
                src={profilePic} 
                alt="user avatar"/>
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor} pb-1`}>{message.message}</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{fromattedTime}</div>
    </div>;
}



export default Message;