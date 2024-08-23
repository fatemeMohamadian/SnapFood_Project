import React from 'react'
import Firstsec1 from './Firstsec-secondpage/page'
import Offchoise from './Offsujestion-secondpage/page'
import Bestpro from './BestProduct-part1/page'
import Specialpro from './SpecialProducts-part2/page'
import Offpro from './OffProduct-part3/page'
import Freepro from './FreeProduct-part4/page'
export default function Products() {
   return (
      <main className='w-full mx-auto 2xl:container'>
         <section className='w-full mt-[30px] flex flex-wrap justify-center items-center'>
            <Firstsec1 />
         </section>
         <section className='w-full mt-[80px] flex flex-wrap justify-center items-center'>
            <Offchoise />
         </section>
         <section className='w-full flex justify-center items-center flex-wrap mt-[80px]'>
            <Bestpro />
         </section>
         <section className='w-full mt-[50px] flex flex-wrap justify-center items-center'>
            <Specialpro />
         </section>
         <section className='w-full flex flex-wrap justify-center items-center mt-[50px]'>
            <Offpro />
         </section>
         <section className='w-full flex justify-center items-center flex-wrap mt-[50px]'>
            <Freepro />
         </section>
     </main>
   )
}
