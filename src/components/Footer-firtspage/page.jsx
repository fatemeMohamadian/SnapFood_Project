import React from 'react'
import Image from 'next/image'
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
export default function Footersec() {
    return (
        <div className='w-[95%] *:my-[40px] lg:*:my-[60px] flex flex-wrap justify-evenly items-center'>
            <div className='lg:w-[40%] w-full flex flex-wrap justify-center  items-center'>
                <div className='flex mt-[20px] w-full justify-center lg:justify-start items-center lg:w-[30%]'>
                    <Image alt='logosnap' width={100} height={100} style={{ objectFit: 'cover' }} src='/logosnap.svg.png' />
                </div>
                <div className='flex mt-[20px] w-full lg:w-[50%] text-center lg:text-start justify-center lg:justify-start *:w-full items-center flex-wrap'>
                    <h2 className='font-title3 text-2xl text-[#ff00a6]'>اسنپ فود</h2>
                    <p className='font-bnazanin mt-[10px] text-gray-500 font-semibold'>تجربه سفارش غذا، از زودفود تا اسنپ فود</p>
                </div>
                <div className='w-[70%] mt-[30px] flex flex-wrap justify-evenly items-center'>
                    <span className='py-[10px] px-[12px] hover:bg-[#ff00a6] group transition-all duration-500 cursor-pointer bg-white shadow-md border-[1px] border-slate-300 text-slate-600 rounded-[50%]'><TelegramIcon className='group-hover:text-white transition-all duration-500' /></span>
                    <span className='py-[10px] px-[12px] hover:bg-[#ff00a6] group transition-all duration-500 cursor-pointer bg-white shadow-md border-[1px] border-slate-300 text-slate-600 rounded-[50%]'><TwitterIcon className='group-hover:text-white transition-all duration-500' /></span>
                    <span className='py-[10px] px-[12px] hover:bg-[#ff00a6] group transition-all duration-500 cursor-pointer bg-white shadow-md border-[1px] border-slate-300 text-slate-600 rounded-[50%]'><InstagramIcon className='group-hover:text-white transition-all duration-500' /></span>
                    <span className='py-[10px] px-[12px] hover:bg-[#ff00a6] group transition-all duration-500 cursor-pointer bg-white shadow-md border-[1px] border-slate-300 text-slate-600 rounded-[50%]'><LinkedInIcon className='group-hover:text-white transition-all duration-500' /></span>
                </div>
            </div>
            <div className='lg:w-[15%] w-full flex justify-start items-center'>
                <ul className='*:font-bnazanin *:cursor-pointer *:text-sm w-full flex flex-wrap justify-center lg:justify-start items-center *:w-full *:font-semibold *:text-slate-700 *:my-[8px]'>
                    <li>درباره اسنپ فود</li>
                    <li>فرصت های شغلی</li>
                    <li>وبلاگ</li>
                    <li>قوانین سایت</li>
                    <li>حریم خصوصی</li>
                    <li>ثبت نام فروشندگان</li>
                </ul>
            </div>
            <div className='lg:w-[15%] w-full flex justify-start items-center'>
                <ul className='*:font-bnazanin *:text-sm w-full flex flex-wrap justify-center lg:justify-start items-center *:w-full *:cursor-pointer *:font-semibold *:text-slate-700 *:my-[8px]'>
                    <li>تماس با اسنپ فود</li>
                    <li>پرسش های متداول</li>
                    <li>ثبت شکایات</li>
                    <li>اپلیکیشن موبایل</li>
                </ul>
            </div>
            <div className='flex justify-start lg:justify-end items-center w-[15%]'>
                <Image alt='senf' width={100} height={100} style={{ objectFit: 'cover' }} src='/senf.png' />
            </div>
        </div>
    )
}
