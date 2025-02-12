import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin.js"
import { Toaster } from "react-hot-toast";

const Login = () => {
    const [UserName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const {loading,login} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(UserName,password)
    }

    return ( <div className="flex flex-col items-center justify-center min-w-96-mx-auto">
         <Toaster position="top-right"/>
        <div className="h-fit w-full p-6 bg-blue-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 ">
            <h1 className="text-3xl font-semibold text-center text-gray-700">
                Login
                <span className="text-blue-500"> Convo</span>
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
                <label className='label p-2'>
							<span className='text-base label-text'>Username</span>
						</label>
                <input type='text' placeholder='Enter Username'className='w-full input input-bordered h-10' 
                 value={UserName}
                 onChange={(e)=>setUserName(e.target.value)}/>
                </div>
                <div>
                <label className='label p-2'>
							<span className='text-base label-text'>Password</span>
						</label>
                <input type='password' placeholder='Enter Password'className='w-full input input-bordered h-10' 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <Link to={"/signup"} className="text-sm hover:underline hover:text-blue-500 mt-2 inline-block">
                    {"Don't"} have an account? </Link> 
                    <div>
                <button className='btn btn-block btn-sm mt-2' disabled={loading}>
                    {loading ? <span className="loading loading-spinner"></span>:"Login"}
                </button>
					</div>
            </form>
        </div>
    </div> );
}

export default Login;