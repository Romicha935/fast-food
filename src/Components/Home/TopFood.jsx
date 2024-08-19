import React from 'react'
import bpimg1 from '../../assets/img/desert5.jpg'
import bpimg2 from '../../assets/img/sandwich5.jpg'
import bpimg3 from '../../assets/img/salad3.jpg'
import bpimg4 from '../../assets/img/pure-vej5.jpg'
import bpimg5 from '../../assets/img/pasta5.jpg'
import { FaStar } from 'react-icons/fa'

const imgList = [
    {
        id:1,
        img:bpimg1,
        name: "Dessert",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, dignissimos.'
    },
    {
        id:2,
        img:bpimg2,
        name: "Sandwich",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, dignissimos.'
    },
    {
        id:3,
        img:bpimg3,
        name: "Salad",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, dignissimos.'
    },
    {
        id:4,
        img:bpimg4,
        name: "Pure-Vej",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, dignissimos.'
    },
    {
        id:5,
        img:bpimg5,
        name: "Pasta",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, dignissimos.'
    },
 
]

const TopFood = ({handleOrder}) => {
  return (
    <div className='container '>
      {/*header  section */}
      <div className='text-center my-10'>
        <p data-aos='fade-up' className='text-sm text-gray-500'>Top Rated Menu</p>
        <h1 data-aos='fade-up' className='text-3xl text-blue-500 font-bold'>Our Best Menu</h1>
        <p data-aos='fade-up' className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptate!
        </p>
      </div>
      {/*body section */}
      <div className='grid grid-col-2 sm:grid-cols-4 md:grid-cols-5 gap-10 sm:gap-5 place-items-center py-20 ml-12'>
     {imgList.map((data)=>(
        <div key={data.id} className='rounded-md bg-white pt-2 relative pl-7  hover:bg-black/80 shadow-xl hover:text-white duration-300 max-w-[300px] px-3 '>
        {/*image section */}
        <div className='flex-col w-fit ml-3 '>
         <img className='h-[140px] w-[140px] block  mx-auto  transfrom -translate-y-20 duration-300 drop-shadow-md object-cover group-hover:scale-105 ' src={data.img} alt="" />
        </div>
        {/*details section */}
        <div className='-translate-y-10 text-center'>
            <div className='flex w-full justify-center gap-2'>
                <FaStar className='text-blue-500'/>
                <FaStar className='text-blue-500'/>
                <FaStar className='text-blue-500'/>
                <FaStar className='text-blue-500'/>
            </div>
            <h1 className='text-xl font-semibold '>{data.name}</h1>
            <p className='text-gray-500  line-clamp-2'>{data.description}</p>
            <button onClick={handleOrder} className='bg-gradient-to-r from-blue-500 to-blue-600 py-1 px-4 rounded-full text-white mt-2 hover:bg-white group-hover:text-blue-500'>Order Now</button>
        </div>
        </div>
     ))}
      </div>
    </div>
  )
}

export default TopFood