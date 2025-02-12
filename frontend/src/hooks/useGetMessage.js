import {useEffect, useState} from 'react'
import useConversation from '../zustand/useConversation.js'
import toast from 'react-hot-toast'

const useGetMessage = () => {
    const [loading,setLoading] = useState(false);
    const {messages,setMessages,selectedConversation} = useConversation()

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true)
            try {
                const user = JSON.parse(localStorage.getItem("chat-user"));
                const token = user?.token; 

                if (!token) {
                    throw new Error("Unauthorized! Please log in again.");
                }

                const res = await fetch(`http://localhost:5000/api/messages/${selectedConversation._id}`, {
                    method: "GET",
                    credentials: "include",
                    headers: { 
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}` // ✅ Include token correctly
                    }
                });
                const data = await res.json();
                if(data.error) {
                    throw new Error(data.error)
                }
                setMessages(data);
            } catch (error) {
                toast.error(error.message)
            } finally{
                setLoading(false)
            }
        }
        if(selectedConversation?._id){
            getMessages();
        }
    },[selectedConversation?._id,setMessages])

    return {messages,loading}
}

export default useGetMessage;