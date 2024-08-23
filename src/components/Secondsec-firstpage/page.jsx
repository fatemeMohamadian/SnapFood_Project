import React from 'react'
import Image from 'next/image'
import SearchIcon from '@mui/icons-material/Search';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
export default function Secondsec() {
    return (
        <div className='w-[90%] bg-[#f9fafb] flex flex-wrap justify-center lg:justify-between items-center'>
            <div className='lg:w-[40%] w-full flex justify-center items-center flex-wrap'>
                <div className='lg:w-[60%] w-full flex justify-center text-center items-center flex-wrap *:w-full'>
                    <h1 className='font-title text-5xl'>سفارش آنلاین</h1>
                    <h3 className='font-title1 text-lg leading-[70px]'>سفارش آنلاین غذا، میوه، نان، شیرینی و ...</h3>
                </div>
                <div className='overflow-hidden *:text-[#ff00a6] *:font-title3 *:text-3xl w-[50%] lg:w-[32%] text-center h-[50px] flex flex-wrap justify-center items-center'>
                    <div className='animate-anime1 w-full'>
                        <h4>خواروبار</h4>
                    </div>
                    <div className='animate-anime2 w-full'>
                        <h4>نان و غذا</h4>
                    </div>
                    <div className='w-full'>
                        <h4>میوه</h4>
                    </div>
                </div>
                <div className='w-full mt-[15px] flex justify-center items-center flex-wrap'>
                    <div className='lg:w-[80%] w-[95%] *:my-[2px] bg-white rounded-3xl flex justify-between items-center border-[1px] border-slate-300'>
                        <span className='text-slate-400 flex justify-center items-center text-center'><FmdGoodOutlinedIcon sx={{color:'rgba(122, 122, 122, 0.8)', width:'28px',paddingRight:'5px'}}/><h2 className='font-title2 pr-[8px] text-sm'>ابتدا آدرستان را انتخاب کنید.</h2></span>
                        <span className='py-[10px] px-[12px] hover:bg-[#f42faf] transition-all duration-500 cursor-pointer bg-[#ff00a6] text-white rounded-[50%] border'><SearchIcon/></span>
                    </div>
                </div>
            </div>
            <div className='w-[45%] lg:my-0 my-[15px] flex flex-wrap justify-center items-center'>
                <Image alt='bg' width={800} height={100} style={{objectFit:'cover'}} src='/bg.png' />
            </div>
        </div>
    )
}
