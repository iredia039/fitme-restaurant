import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Login = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [type, setType] = useState('password')

const navigate = useNavigate();

function handleSubmit(e) {

        e.preventDefault();

        navigate('/');

    }

    return ( 

        <>

        <div className="flex justify-center items-center min-h-[70vh] px-4 py-10 sm:mt-[20vh]">

        <form onSubmit={handleSubmit} className="border w-full max-w-sm sm:w-[20vw] sm:min-w-[320px] h-auto p-6 rounded-lg shadow-md">

            <h2 className="text-xl font-bold text-center mb-6">Login</h2>

            <label htmlFor="email">email</label><br />

            <input type="email" placeholder="enter your email" value={email} onChange={(e)=> setEmail(e.target.value)} className="border w-full p-2"/> <br />

            <br />

            <label htmlFor="password">password</label><br />

            <input type={type} placeholder="enter password" value={password} onChange={(e)=> setPassword(e.target.value)} className="border w-full p-2"/> <br />

            <button type="" onClick={()=>setType(type === 'password' ? 'text': 'password')} className="border rounded-2xl">{type === 'password' ? <p>show</p> : <p>hide</p>}</button><br />

            <br />

            <button type="" onClick={()=>navigate('/')} className="bg-[#FC8019] text-white px-5 py-2 rounded-md">Login</button>

        </form>

        </div>

        </>

     );

}

export default Login;