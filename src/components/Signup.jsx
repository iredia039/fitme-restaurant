import { useState, useEffect } from "react";

import { useSearchParams, useNavigate } from "react-router-dom";

const Signup = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [type, setType] = useState('password')
const navigate = useNavigate()

    return ( 
        <>

        <div className="min-h-[71vh] mt-6 sm:mt-[10vh] flex flex-col px-4">

        <div className="flex-1 flex justify-center items-center">

        <form action="" className="bg-white w-full max-w-sm p-6 sm:p-8 rounded-xl shadow-md">

            <label htmlFor="email" className="block mb-2">Email address</label>

            <input type="email" placeholder="enter your email" value={email} onChange={(e)=> setEmail(e.target.value)} 
            className="w-full border border-gray-300 rounded-md p-2 mb-4"/>

            <label htmlFor="password" className="block mb-2">Password</label>

            <input type={type} placeholder="enter password" value={password} onChange={(e)=> setPassword(e.target.value)} className="w-full border border-gray-300 rounded-md p-2"/>

            <button type="button" onClick={()=>setType(type === 'password' ? 'text': 'password')} className="text-[#fc8019] border rounded-[10px] text-sm mt-2">
                {type === 'password' ? 'show' : 'hide'}
            </button>

            <button type="submit" onClick={()=> navigate('/login')} className="w-full bg-[#FC8019] text-white rounded-md p-2 mt-5">
                sign up
            </button>

            <p className="text-center text-gray-400 text-sm my-4">or</p>

            <button type="button" className="w-full border border-gray-300 rounded-md p-2 mb-2">
                Continue with Google
            </button>

            <button type="button" className="w-full border border-gray-300 rounded-md p-2 mb-2">
                Continue with Apple
            </button>

            <button type="button" className="w-full border border-gray-300 rounded-md p-2">
                Continue with Facebook
            </button>

        </form>

        </div>

        </div>

        </>
     );
}

export default Signup;