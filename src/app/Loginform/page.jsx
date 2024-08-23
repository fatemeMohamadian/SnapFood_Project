"use client"
import Link from 'next/link'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
export default function Login() {
  const close = (e) => {
    e.target.parentElement.parentElement.parentElement.style.display='none'
  }
  return (
    <div className='lg:w-[40%] w-full *:my-[10px] bg-white shadow-md border-[2px] rounded-xl border-slate-100 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-wrap justify-center items-center'>
      <span onClick={close} className='w-full flex justify-start items-center cursor-pointer '>
        <CloseIcon className='pr-[5px] text-[33px]' />
      </span>
      <div className='w-[90%] flex flex-wrap justify-start items-center'>
        <h2 className='font-title3 text-2xl'>انتخاب آدرس</h2>
        <h3 className='font-bnazanin mt-[3px] font-bold w-full'>برای مشاهده مناسب ترین پیشنهادها به شما، ابتدا موقعیتتان را مشخص کنید.</h3>
      </div>
      <div className='w-full h-[50vh] bg-cover flex-wrap flex justify-center items-start bg-no-repeat bg-[url("/map.png")]'>
        <div className='w-[90%] mt-[20px] *:my-[6px] rounded-md shadow-lg bg-white border flex justify-around items-center flex-wrap'>
          <h4 className='font-title3 border-l border-l-slate-300 pl-[10px] text-lg'>تهران</h4>
          <span className='w-[60%] flex justify-center items-center'>
            <p className='font-bnazanin italic text-lg'>بلوار ******** خیابان ********</p>
          </span>
          <span className='py-[8px] px-[10px]  transition-all duration-500 cursor-pointer  text-gray-400 rounded-[50%]'><SearchIcon /></span>
        </div>
      </div>
      <Link className='w-[95%] flex justify-center items-center' href='Productspages'><button className='w-full rounded-lg hover:bg-[#f030ad] shadow-md transition-all duration-500 flex justify-center items-center py-[10px] bg-[#ff00a6] text-white font-title3 text-lg'>تایید</button></Link>
    </div>
  )
}
