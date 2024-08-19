import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import React, { useEffect,useState } from 'react'
import { app } from '../Firebase/firebase.config';
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate()
    const auth = getAuth(app)
    const [user, setUser] = useState(null);

    const handleLogin = (e) => {
        e.preventDefault();
        const data = e.target;
        const email = data.email.value
        const password = data.password.value;
        console.log('email:',email, 'password:', password)
     


        if(email && password){
 signInWithEmailAndPassword(auth, email,password)
    .then(res=>{
        console.log(res)
    })
      .catch(err=>{
        console.log(err)
      })
    }
}

useEffect(()=>{
    onAuthStateChanged(auth, (customer)=> {
    if(customer){
        console.log(customer)
        setUser(customer)
    }
    });
},[auth]
)

    const handleLogOut  = () => {
      if(user){
        signOut(auth)
        .then(res=> {
            console.log(res)
        } )  
        .catch(err=> {
            console.log(err)
        })                                                                      
        
        
      }
    }

  return (
    <div>
        <h1 className='text-5xl font-bold text-blue-500 text-center py-8'>This is a Login Page</h1>
        <div className='w-fit mx-auto my-10 border-2 space-y-5 p-4'>
            <form onSubmit={handleLogin} action="" className=''>
                <div>
                    <label className='text-lg font-semibold' htmlFor="">Enter your email</label><br />
                    <input name='email' type="email" className='border-2 border-gray-400 p-1 w-72 rounded-lg' />
                 
                </div>
               
                <div>
                <label className='text-lg font-semibold pt-7' htmlFor="">Enter your password</label><br />
                <input name='password' type="password" className='border-2 border-gray-400 p-1 w-72 rounded-lg' />
                </div>
                <div className='flex justify-end'>
                    <button onClick={()=>navigate("/registration")} className='text-red-500 font-bold'>New User??</button>
                </div>
                <div className='text-center'>
                    <button className='bg-blue-500 text-white py-1 px-4 w-1/2'>LogIn</button>
                </div>
                <div className='py-6 text-center'>
                    <button onClick={handleLogOut} className=' bg-blue-500 text-white py-1 px-4 w-1/2 '>Log Out</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login