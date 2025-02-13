import { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import { useSocketContext } from "../Context/SocketContext";


const useLogout = () => {
    const [loading,setLoading] = useState(false);
    const {setAuthUser} = useAuthContext()
    const { socket, setOnlineUsers } = useSocketContext();

    const logout = async () => {
        setLoading(true)
        try {
            const res = await fetch("/api/auth/logout",{
                method:'POST',
                headers:{"Content-Type":"application/json"}
            })
            const data = await res.json()
            if(data.error){
                throw new Error(data.error)
            }

            if (socket) {
                socket.disconnect();
            }


            localStorage.removeItem("chat-user");
            setAuthUser(null)
            setOnlineUsers([]);
        } catch (error) {
            toast.error(error.message)
        }
        finally{
            setLoading(false)
        }
    }
    return { loading, logout };
}

export default useLogout