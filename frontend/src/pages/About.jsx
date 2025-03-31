import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
       <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
       <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
       <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
       <p>Forever is your destination for timeless style and enduring quality. We curate a diverse collection of fashion, home goods, and lifestyle products designed to last. Discover classic pieces that transcend fleeting trends, alongside modern essentials crafted with sustainable practices. </p>
       <p>At Forever, we believe in investing in items that enrich your life, offering both enduring style and lasting value. Experience seamless online shopping with secure transactions and reliable delivery. Find your forever favorites today.</p>
       <b className='text-gray-800'>Our Mission</b>
       <p>Our mission at Forever is to provide customers with a curated selection of timeless and high-quality fashion, home goods, and lifestyle products. We are dedicated to promoting enduring style and sustainable practices, empowering individuals to invest in items that enrich their lives. By offering a seamless online shopping experience, we strive to build lasting relationships with our customers, ensuring they discover 'forever favorites' that bring lasting value and satisfaction. We are committed to providing products that outlast fleeting trends, and help our customers build a more sustainable and fulfilling lifestyle.</p>
       </div>
      </div>
     <div className='text-xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'}/>
     </div>
     <div className='flex flex-col md:flex-row text-sm md-20 py-10'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Forever ensures quality through rigorous material selection, meticulous craftsmanship, and thorough product testing. We are committed to delivering durable, long-lasting goods, upholding our promise of enduring value and customer satisfaction.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Forever prioritizes your convenience with a user-friendly online platform, secure transactions, and reliable delivery. We aim to simplify your shopping experience, ensuring seamless access to timeless products, delivered directly to your door.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Forever delivers exceptional service by prioritizing attentive, personalized support. We are committed to swift issue resolution, clear communication, and exceeding expectations, ensuring every customer feels valued and satisfied</p>
        </div>
     </div>

    <NewsletterBox />

    </div>
  )
}

export default About