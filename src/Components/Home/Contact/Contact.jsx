import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8 bg-white px-11 py-8 rounded-xl shadow-md'>
            <div>
                <h1 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Contact Us</h1>
                <p className='mt-2 text-center text-sm text-gray-600'>We'd love to here from you</p>
            </div>
            <div>
               <form className='mt-6 space-y-6 ' action="" method='POST'>
                <div>
                    <div>
                <label htmlFor="name"  className='sr-only'>Name :</label><br />   
                  <input required autoComplete='name' className='appearance-none rounded-none relative block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus-within:z-10 sm:text-sm' type="text" name='name' placeholder='Enter your Name ' />    
                
                                 </div>
                                 <div className='my-4'>
                                 <label htmlFor="email-address" className='sr-only' >Email Address:</label>
                                 <input type="email" required autoComplete='email' className='appearance-none rounded-none relative block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus-within:z-10 sm:text-sm' placeholder='Enter you Email Address'/>
                                 </div>
                                 <div className='mb-4'>
                                    <label htmlFor="message" className='sr-only'>Message</label>
                                    <textarea name="message" rows={4} required id="" className='appearance-none rounded-none relative block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus-within:z-10 sm:text-sm' placeholder='Your message'></textarea>
                                 </div>
                </div>
                <div className='my-5'>
                    <button type='submit' className='group w-full relative flex justify-center py-2 px-4 border-transparent text-sm font-md rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>Submit</button>
                </div>
               </form>
            </div>

        </div>
    </div>
  )
}

export default Contact