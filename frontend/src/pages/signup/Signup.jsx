import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";
import { Toaster } from "react-hot-toast";

const Signup = ()=> {

    const [inputs,setInputs] = useState({
        fullName:'',
        userName:'',
        password:'',
        confirmPassword:'',
        gender:''
    })



    function handleCheckboxChange(gender) {
        setInputs({ ...inputs, gender });
    }
    const {loading,signup} = useSignup();
    const handleSubmit = (e) => {
        e.preventDefault();// on clicking submit then page will refresh but preventDefault will
                           // will not refresh
        signup(inputs);
    }

    return ( 
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
                <Toaster position="top-right"/>
        <div className=" mx-0 my-2 w-full p-6 bg-blue-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 ">
            <h1 className="text-3xl font-semibold text-center text-gray-700">
                Sign Up
                <span className="text-blue-500"> Convo</span>
            </h1>
            <form onSubmit={handleSubmit}>
            <div>
                <label className='label p-2'>
							<span className='text-base label-text'>Full Name</span>
						</label>
                <input type='text' placeholder='Enter Full Name'className='w-full input input-bordered h-10' 
                value={inputs.fullName}
                onChange={(e) => setInputs({...inputs, fullName: e.target.value})}/>
                </div>
            <div>
                <label className='label p-2'>
					<span className='text-base label-text'>Username</span>
						</label>
                <input type='text' placeholder='Enter Username'className='w-full input input-bordered h-10' 
                value={inputs.userName}
                onChange={(e) => setInputs({...inputs, userName: e.target.value})}/>
            </div>
            <div>
                <label className='label p-2'>
					<span className='text-base label-text'>Password</span>
						</label>
                <input type='password' placeholder='Enter Password'className='w-full input input-bordered h-10' 
                value={inputs.password}
                onChange={(e)=> setInputs({...inputs,password: e.target.value})}/>
            </div>
            <div>
                <label className='label p-2'>
					<span className='text-base label-text'>Confirm Password</span>
						</label>
                <input type='password' placeholder='Confirm Password'className='w-full input input-bordered h-10 mb-2' 
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}/>
            </div>
            <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>
            <Link to={"/login"} className="text-sm hover:underline hover:text-blue-500 mt-2 inline-block">
            Already have an account? </Link>
            <div>
            <button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
                {loading ? <span className="loading loading-spinner"></span>:"Sign Up"}
            </button>
            </div>
            </form>
        </div>
    </div> 
);
}

export default Signup;