"use client"
import React from 'react'
import Image from 'next/image'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
export default function Threesec() {
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText('#ff00a6'),
        backgroundColor: '#ff00a6',
        '&:hover': {
            backgroundColor: '#d5008b',
        },
    }));
    return (
        <div className='w-[90%] bg-[#ebedf0] rounded-md lg:rounded-br-[30%] flex flex-wrap justify-evenly items-center'>
            <div className='lg:w-[45%] w-full flex flex-wrap justify-center lg:justify-start items-center text-center lg:text-start'>
                <h2 className='font-title3 mt-[20px] lg:mt-0 text-3xl lg:text-5xl'>اپلیکیشن اسنپ فود</h2>
                <h3 className='font-bnazanin font-bold mt-[50px]'>با اپلیکیشن اسنپ‌فود به راحتی و با چند کلیک ساده می‌توانید رستوران‌ها، کافه‌ها، شیرینی‌فروشی‌ها و سوپرمارکت‌های نزدیک خودتان را جست‌و‌جو کرده و از تجربه سفارش آسان از اسنپ‌فود لذت ببرید.</h3>
                <p className='w-full text-slate-800 mt-[50px] text-sm font-title2'>برای دریافت لینک دانلود اپلیکیشن، شماره موبایلتان را وارد کنید.</p>
                <div className='lg:w-[70%] w-[90%] *:my-[10px] mt-[15px] border flex lg:justify-evenly flex-wrap justify-center items-center bg-white rounded-lg'>
                    <input type="text" className='outline-none font-bnazanin placeholder:font-title2 lg:w-auto lg:placeholder:text-start placeholder:text-center
                     w-[90%] border-none' placeholder='*********09' />
                    <span className='flex lg:w-auto w-full  justify-center items-center'>
                        <ColorButton sx={{ padding: '8px 15px' }} variant="contained"><p className='font-title text-lg'>دریافت لینک</p></ColorButton>
                    </span>
                </div>
                <div className='w-full mt-[40px] flex flex-wrap justify-evenly items-center border '>
                    <Image className='cursor-pointer' width={150} height={100} style={{objectFit:'cover'}} alt='myket'  src='/myket.png'/>
                    <Image className='cursor-pointer' width={150} height={100} style={{objectFit:'cover'}} alt='bazaar' src='/bazaaar.png'/>
                    <Image className='cursor-pointer' width={150} height={100} style={{objectFit:'cover'}} alt='sibapp' src='/sibapp.png'/>
                    <Image className='cursor-pointer' width={150} height={100} style={{objectFit:'cover'}} alt='iapps' src='/iapps.svg'/>
                </div>
            </div>
            <div className='w-[40%] flex justify-center items-center'>
                <Image width={600} height={100} style={{objectFit:'cover'}} alt='phone' src="/phone.png" />
            </div>
        </div>
    )
}
