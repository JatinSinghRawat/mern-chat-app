import GenderCheckbox from "./GenderCheckbox";

const Signup = ()=> {
    return ( 
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className=" mx-0 my-2 w-full p-6 bg-blue-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 ">
            <h1 className="text-3xl font-semibold text-center text-gray-700">
                Sign Up
                <span className="text-blue-500"> Convo</span>
            </h1>
            <form>
            <div>
                <label className='label p-2'>
							<span className='text-base label-text'>Full Name</span>
						</label>
                <input type='text' placeholder='Enter Full Name'className='w-full input input-bordered h-10' />
                </div>
            <div>
                <label className='label p-2'>
					<span className='text-base label-text'>Username</span>
						</label>
                <input type='text' placeholder='Enter Username'className='w-full input input-bordered h-10' />
            </div>
            <div>
                <label className='label p-2'>
					<span className='text-base label-text'>Password</span>
						</label>
                <input type='text' placeholder='Enter Password'className='w-full input input-bordered h-10' />
            </div>
            <div>
                <label className='label p-2'>
					<span className='text-base label-text'>Confirm Password</span>
						</label>
                <input type='text' placeholder='Confirm Password'className='w-full input input-bordered h-10 mb-2' />
            </div>
            <GenderCheckbox/>
            <a href="#" className="text-sm hover:underline hover:text-blue-500 mt-2 inline-block">
            Already have an account? </a>
            <div>
            <button className='btn btn-block btn-sm mt-2'>Login</button>
            </div>
            </form>
        </div>
    </div> 
);
}

export default Signup;