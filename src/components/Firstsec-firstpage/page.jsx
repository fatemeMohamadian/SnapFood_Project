"use client"
import React from 'react'
import StoreIcon from '@mui/icons-material/Store';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#ff00a6'),
    backgroundColor: '#ff00a6',
    '&:hover': {
        backgroundColor: '#d5008b',
    },
}));
export default function Firstsec() {
    return (
        <header className='w-[90%] flex flex-wrap lg:justify-between bg-[#f9fafb] justify-center items-center mt-[15px] *:my-[20px]'>
            <div className='lg:w-[20%] w-full justify-center flex-wrap items-center flex'>
                <Image alt='logo' width={150} height={150} priority={true} style={{objectFit:'cover',width:'50%',height:'50%'}} src='/logosnap.svg.png' />
            </div>
            <div className='lg:w-[30%] w-full flex-wrap justify-evenly items-center *:my-[10px] lg:*:my-0 flex'>
                <span className="flex justify-center items-center cursor-pointer"><p className='font-bnazanin font-bold text-slate-900'>  <StoreIcon />ثبت نام فروشندگان</p></span>
                <span className='flex justify-center items-center'>
                    <ColorButton sx={{ padding:'10px 15px' }} variant="contained"><p className='font-title text-lg'>ورود و عضویت</p></ColorButton>
                </span>
            </div>
        </header>
    )
}
