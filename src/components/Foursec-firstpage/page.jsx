"use client"
import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Image from 'next/image';
export default function Foursec() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#ff00a6'),
    backgroundColor: '#ff00a6',
    '&:hover': {
      backgroundColor: '#d5008b',
    },
  }));
  return (
    <div className='w-[90%] bg-[#f9fafb] *:my-[60px] flex flex-wrap justify-evenly items-center'>
      <div className='lg:w-[40%] w-full *:my-[25px] flex flex-wrap text-center lg:text-start lg:justify-start justify-center items-center'>
        <h2 className='font-title3 text-slate-700 text-4xl'>صاحب کسب و کار هستید؟</h2>
        <h3 className='font-title2 text-slate-600'>با اسنپ فود کسب و کارتان را آنلاین کنید و فروشتان را افزایش دهید.</h3>
        <span className='flex lg:w-auto w-full  justify-center items-center'>
          <ColorButton sx={{ padding: '8px 15px' }} variant="contained"><p className='font-title text-lg'>ثبت نام فروشندگان</p></ColorButton>
        </span>
      </div>
      <div className='w-[30%] flex justify-center items-center'>
        <Image alt='home' width={300} height={100} style={{ objectFit: 'cover' }} src='/home.png' />
      </div>
    </div>
  )
}
