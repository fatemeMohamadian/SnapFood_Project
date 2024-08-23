import React from 'react'
import './globals.css'
import Firstsec from '@/components/Firstsec-firstpage/page';
import Secondsec from '@/components/Secondsec-firstpage/page';
import Slidersec from '@/components/Slidersec-firstpage/page';
import Catesec from '@/components/Categury-firstpage/page';
import Threesec from '@/components/Threesec-firstpage/page';
import Foursec from '@/components/Foursec-firstpage/page';
import Citysnap from '@/components/Citysnap-firstpage/page';
import Footersec from '@/components/Footer-firtspage/page';
export default function Page() {
  return (
    <main dir='rtl' className='w-full mx-auto 2xl:container'>
      <section className='w-full flex flex-wrap justify-center items-center'>
        <Firstsec />
      </section>
      <section className='w-full flex flex-wrap justify-center items-center '>
        <Secondsec />
      </section>
      <section className='w-full mt-[80px] flex flex-wrap justify-center items-center'>
        <Slidersec />
      </section>
      <section className='w-full flex flex-wrap justify-center items-center mt-[50px]'>
        <Catesec />
      </section>
      <section className='w-full flex flex-wrap justify-center items-center mt-[100px]'>
        <Threesec />
      </section>
      <section className='w-full mt-[90px] flex flex-wrap justify-center items-center'>
        <Foursec />
      </section>
      <section className='w-full flex flex-wrap justify-center items-center mt-[60px]'>
        <Citysnap/>
      </section>
      <section className='w-full mt-[30px] bg-[#f9fafb] flex flex-wrap justify-center items-center'>
        <Footersec/>
      </section>
   </main>
    
  )
}
