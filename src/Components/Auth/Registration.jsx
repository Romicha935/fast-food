import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../Firebase/firebase.config';
const Registration = () => {
    const navigate = useNavigate()
    
    const handleRegister = (e) => {
        e.preventDefault();
        const data = e.target
        const email = data.email.value
        const password = data.password.value
        console.log(email,password)
        const auth = getAuth(app);
        
        if(email && password) {
            createUserWithEmailAndPassword(auth, email, password)
           
            .then(res=>{
                console.log(res)
            })
            .catch(err=> {
                console.log(err);
                
            })
        }

    }
  return (
    
    <div>
    <h1 className='text-5xl font-bold text-blue-500 text-center py-8'>This is a Registration Page</h1>
    <div>
        <form onSubmit={handleRegister} action="" className='w-fit mx-auto my-10 border-2 space-y-5 p-4'>
            <div>
                <label className='text-lg font-sem)ibold' htmlFor="">Enter your email</label><br />
                <input name='email' type="email" className='border-2 border-gray-400 p-1 w-72 rounded-lg' />
             
            </div>
           
            <div>
            <label className='text-lg font-semibold pt-7' htmlFor="">Enter your password</label><br />
            <input name='password' type="password" className='border-2 border-gray-400 p-1 w-72 rounded-lg' />
            </div>
            <div className='flex justify-end'>
                <button onClick={()=>navigate("/login")} className='text-red-500 font-bold'>Alrady User??</button>
            </div>
            <div className='text-center'>
                <button className='bg-blue-500 text-white py-1 px-4 w-1/2'>Registration</button>
            </div>
        </form>
    </div>
</div>
  )
}

export default Registration