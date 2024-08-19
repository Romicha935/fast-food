import React from 'react'
import logo from '../../assets/img/logo.jpg'

import { IoMdSearch } from 'react-icons/io'
'react-icons/fa6'
import { IoFastFood } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const Routers = [
    {
        id:1,
        name: "Home",
        link: "/"
    },
    {
        id:2,
        name: "Menu",
        link: "/Menu"
    },
    {
        id:3,
        name: "Services",
        link: "/services"
    },
    {
        id:4,
        name: "About",
        link: "/about"
    },
    {
        id:5,
        name: "Contact",
        link: "/contact"
    }
]


const Navbar = ({handleOrder}) => {
    const navigate = useNavigate()
  return (
    <div className='shadow-md bg-white duration-300 relative'>
        {/*upper navbar */}
           <div className='bg-blue-300 py-2 px-10 items-center justify-between  flex '>
            <div className='container flex justify-between items-center'>
               <div>
               <a href="#" className='text-2xl font-bold sm:text-3xl flex gap-2 text-white'><img className='w-10 rounded-full' src={logo} alt="" />Fast Food</a>
               </div>
         
            {/*search bar */}
            <div className='relative group flex items-center justify-center'>
            <div className='group hidden sm:block'>
                <input type="text" placeholder='search' className='w-[200px] sm:w-[200px] group-hover:w-[300px] py-1 px-2 translate-all duration-300 rounded-full border border-gray-300 focus:outline-none focus:border-1 focus:border-blue-400' />
                <IoMdSearch className='absolute top-1/2 -translate-y-1/2 right-3 text-gray-500 group-hover:text-blue-400'/>
            </div>
            </div>
            {/*order btn */}
            <button onClick={()=> handleOrder()} className='bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
                <span className='hidden group-hover:block' >Order</span>
                <IoFastFood/>
            </button>

            <button onClick={()=>navigate("/login")} className='bg-gradient-to-r from-blue-600 to-blue-700 text-white py-1 px-4 duration-200 rounded-full'>Log in</button>
            </div>
           </div>
        {/*lowar Navbar */}
        <div className=''>
            <div className='flex justify-center'>
                <ul className=' sm:flex hidden justify-center gap-4'>
                {
                    Routers.map((data)=>(
                        <li key={data.id}><a className='inline-block px-4 duration-200 hover:text-blue-500 cursor-pointer py-2' href={data.link}>{data.name}</a></li>

                    ))
                }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar