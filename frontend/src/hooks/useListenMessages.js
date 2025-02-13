import {useSocketContext} from '../Context/SocketContext.jsx'
import useConversation from '../zustand/useConversation.js'
import { useEffect } from 'react';
import notificationSound from '../assets/frontend_src_assets_sounds_notification.mp3'

const useListenMessages = () => {
    const {socket} = useSocketContext();
    const {messages,setMessages} = useConversation();

    useEffect(()=>{
        socket?.on("newMessage",(newMessage) => {
            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound);
            sound.play();
            setMessages([...messages,newMessage])
        })

        return () => socket.off("newMessage") // if we do not add this line then we will here the sound again and again so this is 
                                              // cleanup for this
    },[socket,setMessages,messages])
}

export default useListenMessages;