import React from 'react'
import banner1 from '../../assets/img/noodles2.jpg'
import banner2 from '../../assets/img/sandwich3.jpg'
import banner3 from '../../assets/img/pasta1.jpg'
import banner4 from '../../assets/img/rolls2.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Slider from 'react-slick'

const imageList = [
    {
        id: 1,
        img:banner1,
        title: 'Up to Deliosas Noodlse ',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, inventore.'
    },
    {
        id: 2,
        img:banner2,
        title: 'Up to Deliosas Shandwich ',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, inventore.'
    },
    {
        id: 3,
        img:banner3,
        title: 'Up to Deliosas Pasta ',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, inventore.'
    },
    {
        id: 4,
        img:banner4,
        title: 'Up to Deliosas Rolls ',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, inventore.'
    },
]

const Banner = ({handleOrder}) => {
    React.useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 800,
          easing: 'ease-in-out',
          delay: 100,
        });
        AOS.refresh();
      }, []);

    
    var settings = {
        dots:false,
        arrow:false,
        infinite:true,
        speed:800,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus : true,
    }

  return (
    <div className='relative overflow-hidden min-h-[500px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center duration-200'>
     {/*backgroun section */}
     <div className='h-[600px] w-[600px] bg-blue-200 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]'>
        
     </div>
     <div className='container pb-8 sm:pb-0'>
        <Slider {...settings}>
        {imageList.map((data)=>(
            <div key={data.id}>
               <div className=' grid grid-cols-1 sm:grid-cols-2'>
                {/*text contetnt section */}
                <div className='flex flex-col justify-center gap-5 pt-10 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                  <h1 data-aos='Zoom-out'
                  data-aos-duration='500'
                  data-aos-once='true' className='text-5xl sm:text-6xl font-bold'>{data.title}</h1>
                  <p data-aos='fade-up'
                  data-aos-duration='500'
                  data-aos-delay='200' className='text-sm'>{data.description}</p>
                  <div data-aos='fade-up' data-aos-duration='500'
                  data-aos-delay='300' className='py-3'>
                    <button onClick={handleOrder} className='bg-gradient-to-r from-blue-500 to-blue-600 p-1 px-4 rounded-full hover:scale-10 text-white'>Order Now</button>
                  </div>
                </div>
                {/*image section */}
                <div className='order-1 sm:order-2'>
                    <div data-aos='Zoom-in'
                    data-aos-once='true' className='relative z-10'>
                        <img className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 lg:scale-125 max-auto object-contain' src={data.img} alt="" />
                    </div>
                </div>
               </div>
            </div>
        ))}
        </Slider>
     </div>
   
    </div>
  )
}

export default Banner