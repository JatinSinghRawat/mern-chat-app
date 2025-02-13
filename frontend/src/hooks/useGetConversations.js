import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";

const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);
    const {authUser} = useAuthContext();

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const user = JSON.parse(localStorage.getItem("chat-user")); // ✅ Get token from localStorage
                const token = user?.token; 

                if (!token) {
                    throw new Error("Unauthorized! Please log in again.");
                }

                const res = await fetch("/api/users", {
                    method: "GET",
                    credentials: "include", // Include cookies if needed
                    headers: { 
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}` // ✅ Include token properly
                    }
                });

                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                setConversations(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        getConversations();
    }, [authUser]); // ✅ No token dependency needed

    return { loading, conversations };
};

export default useGetConversations;
