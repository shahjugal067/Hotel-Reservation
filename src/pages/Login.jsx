
import { EyeOff, LogInIcon, Mail } from 'lucide-react'
import React, {  useState } from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  
  

  const handleLogout = async(e)=>{
    e.preventDefault();
    
  }
  return (
    <div className='flex justify-center items-center h-screen '>
    
        <form onSubmit={handleLogout} 
        className='w-[400px] bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100
         flex flex-col gap-4 mx-auto shadow-lg shadow-yellow-300 p-6 rounded-lg' > 
            <h1 className='text-3xl text-green-500 text-center'>Login</h1>
            <div>
            <Mail className='w-5 h-5 text-yellow-500 absolute ml-4 mt-2.5' />
            <input  onChange={(e)=>setEmail(e.target.value)} value={email}
            type="email" placeholder='your@gmail.com' className='w-full px-10 py-2 border border-gray-300 rounded-lg' />

            </div>
            <div>
            <EyeOff className='w-5 h-5 text-yellow-500 absolute ml-4 mt-2.5' />
            <input  onChange={(e)=>setPassword(e.target.value)} value={password}
            type="password" placeholder='Password' className='w-full px-10 py-2 border border-gray-300 rounded-lg' />

            </div>
            <p>Don't have an account?<Link to='/register' className='text-green-500'> Sign up</Link></p>
            <button type='submit'
            className='bg-green-500 hover:bg-green-700 rounded-lg py-2 flex justify-center items-center hover:scale-105'>
                <span><LogInIcon className='w-5 h-5 mr-3'/></span>
                Login</button>
        </form>
    </div>
  )
}

export default Login