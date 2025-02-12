import { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";

const useLogin = () => {
    const [loading,setLoading] = useState(false);
    const {setAuthUser}=useAuthContext();

    const login = async(userName, password) => {
        const success = handleInputErrors(userName,password);
        if(!success){
            return;
        }
        setLoading(true)
        try {
            const res = await fetch("http://localhost:5000/api/auth/login",{
                method:'POST',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({userName,password}),
                credentials:"include"
            })

            const data = await res.json()
            console.log("Backend Response:", data);
            if(data.error){
                throw new Error(data.error)
            }

            const userData = {
                _id: data._id,
                fullName: data.fullName,
                userName: data.userName,
                profilePic: data.profilePic,
                token: data.token  // ✅ Store token
            };

            localStorage.setItem("chat-user", JSON.stringify(userData));
            setAuthUser(userData);
            toast.success("Login successful!");
            window.location.reload(); // Refresh to apply token

        } catch (error) {
            toast.error(error.message)
        }
        finally{
            setLoading(false)
        }
    }

    return{loading,login}
}

export default useLogin

function handleInputErrors(userName,password){
    if(!userName || !password){
        toast.error("Please fill all the fields");
        return false;
    }
    return true
}