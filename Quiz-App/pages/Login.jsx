import React, { useState } from 'react';
import {auth} from '../config/firebase';

import{signInWithEmailAndPassword} from 'firebase/auth'
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const[password, setPassword] =useState('');
    const [error,setError] =useState('');

    const handleSubmit = async (e)=>{
        e.preventDefault()
        setError("")

        try{
            await signInWithEmailAndPassword(auth,email,password);
            toast.success("User Logged in successfully")
            navigate("/home")
        }catch(err){
            setError(err.message)
            toast.error(err.message)
        }
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-20 px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <p className="text-2xl font-bold flex items-center justify-center mt-6">
          {" "}
        </p>
        Log In
        {error && <p className="text-red text-sm"></p>}
        <input
          type="email"
          placeholder="arowolo@email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="appearance-none  relative block
           w-full px-3 py-2 border border-gray-300
            placeholder-gray-500 text-gray-900 rounded-md focus:outline-none  focus:border-gray-500 focus:z-10 sm:text-sm"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="appearance-none  relative block
           w-full px-3 py-2 border border-gray-300
            placeholder-gray-500 text-gray-900 rounded-md focus:outline-none  focus:border-gray-500 focus:z-10 sm:text-sm"
          required
        />
      </form>
    </div>
  );
}

export default Login