import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MesssageInput = () => {

    const[message,setMessage] = useState('');
    const{loading,sendMessage}= useSendMessage();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!message) return;
        await sendMessage(message);
        setMessage("");
    }

    return (
        <form className="px-4 my-3 relative" onSubmit={handleSubmit}>
            <div className="w-full">
                <input type="text" 
                className="border text-sm rounded-lg w-full p-2.5 bg-gray-700 border-gray-600 text-white" 
                placeholder="Send a message"
                value={message}
                onChange={(e)=>setMessage(e.target.value)}/>
            </div>
            <button type="submit" className="absolute top-0 bottom-0 right-5  flex items-center pe-3" disabled={loading}>{loading ? <span className="loading loading-spinner"></span>: <BsSend/>}</button>
            {/*inset-y-0 means top:0 and bottom:0 and end-0 means the right (or left in RTL) position of the element to 0, */}
        </form>
    );
}

export default MesssageInput;