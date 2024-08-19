import React from 'react'
import menucard from '../../../../public/foods.json'

const Menu = () => {
  return (
    <div>
      <div>
        <h1 className='text-3xl font-semibold text-center pt-10 text-blue-500'>Our Full Menu</h1>
        <div className='flex flex-wrap gap-10 py-10 justify-center md:2/3'>
         {menucard.map((item,index)=>(
            <div className='border-2 rounded-xl p-2 w-fit flex-col text-center items-center' key={index}>
              <img className='h-40 w-44 justify-center items-center object-cover mx-auto' src={item.image} alt="" />
              <h1 className='text-2xl font-semibold'>{item.name}</h1>
              <p className='text-blue-500'>${item.price}</p>
              <h3>{item.category}</h3>
              <p className='line-clamp-2 w-56 text-sm'>{item.description}</p>
              
            </div>
         ))}
        </div>
      </div>
    </div>
  )
}

export default Menu