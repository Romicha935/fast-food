import React from 'react'
import resturent from '../../../assets/img/resturet.jpg'

const About = () => {
  return (
    <div className='py-10'>
      <div>
        <h1 className='text-3xl font-semibold text-center text-blue-500 '>About Our Foods</h1>
        </div>
  <div className=' flex gap-10  py-10 px-10'>
  <img src={resturent} alt="" />
  <p className='italic'><span className='text-blue-600 text-4xl'>A</span>ssalmualaikum evryone Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, doloremque. Ratione quaerat quisquam odit pariatur voluptatem, facilis veniam tempora reprehenderit cupiditate harum tenetur laudantium nesciunt quae sint rerum! Quasi quas aliquam alias, incidunt nobis hic doloribus necessitatibus voluptas odio quibusdam illum eveniet cumque qui,  <br /> <br /> perspiciatis dolorum assumenda maxime totam, in minima magni consectetur cum. Nam dolor quos dignissimos eveniet, enim esse earum, consequatur commodi est amet cum quo aliquid sint ipsum harum accusamus eum dolorem sed eius repellendus. Repellendus quos, temporibus a ea itaque nemo adipisci hic expedita reiciendis laborum voluptates inventore tenetur quidem ipsam repellat minus quam? Quas, nihil! </p>

  </div>
      
    </div>
  )
}

export default About