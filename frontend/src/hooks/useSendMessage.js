import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from 'react-hot-toast'

const useSendMessage = () => {

    const [loading,setLoading] = useState(false);
    const {messages,setMessages,selectedConversation} = useConversation();

    const sendMessage = async (message) => {
        setLoading(true)

        const user = JSON.parse(localStorage.getItem("chat-user"));
        const token = user?.token;

        if (!token) {
            toast.error("Unauthorized! Please log in again.");
            return;
        }

        try{
            const res = await fetch(`http://localhost:5000/api/messages/send/${selectedConversation._id}`,{
                method:'POST',
                headers:{'Content-Type':'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body:JSON.stringify({message})

            })

            const data = await res.json()
            if(data.error) {
                throw new Error(data.error)
            }

            setMessages([...messages, data]);
        }catch(error){
            toast.error(error.message);
        } finally{
            setLoading(false)
        } 
    }
    return {sendMessage,loading}
}



export default useSendMessage;