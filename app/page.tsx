import Keyboard from '@/components/Keyboard'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Hero from '@/components/Hero'
import Box from '@/components/Box'
import LeaderBoard from '@/components/LeaderBoard'
import Cube from '@/components/Cube'
import Svg from '@/components/Svg'
import Woordle from '@/components/Woordle'
import Menu from '@/components/Menu'
import FAqs from '@/components/FAqs'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className=''>
      <Navbar />
      <section className=' rounded-b-[100px] bg-[url("/1.png")] object-fill  ' >
        <Hero />
        
        <Box />
        <LeaderBoard  />
      {/* <Image src='/1.png' className='-z-20 'layout='fill' alt='' /> */}
      </section> 

      
        <Woordle />
        <section className='  flex justify-center rounded-t-[100px] items-center   shadow-[0px 14px 24px 0px rgba(0, 0, 0, 0.06)]' >
          <Menu   />
          </section >
          <section className='flex flex-col justify-center items-center p-10 '>
           <div className='flex flex-col gap-y-4 lg:w-[63%] xxl:w-[63%] md:w-[63%]'>
            <h1 className='text-[#1C1F35] text-[2.375rem] font-extrabold text-center'>Faqs</h1>
           
            <FAqs />
          </div>
          </section>
          <Footer />

        
        
    
     
    </div>
  )
}
