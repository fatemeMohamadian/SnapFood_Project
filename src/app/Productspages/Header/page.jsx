"use client"
import React from 'react'
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ListAltIcon from '@mui/icons-material/ListAlt';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Sliderpage from '../Slider-page2/page';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Link from 'next/link';
import useCart from '@/app/store/store';
export default function Header() {
    const percart = useCart((state) => state.mycart)
    return (
        <>
            <section className='w-full z-[100] bg-white fixed shadow-md top-0 right-0 flex flex-wrap justify-center items-center'>
                <header className='lg:w-[95%] w-full *:my-[15px] flex justify-center lg:justify-between items-center flex-wrap'>
                    <div className='lg:w-[10%] w-[50%] flex justify-center items-center'>
                        <Link href='/'><Image width={100} height={100} alt='logomenu' style={{ objectFit: 'cover' }} src='/logosnap.svg.png' /> </Link>
                    </div>
                    <div className='lg:w-[15%] w-[50%] text-center lg:text-start flex justify-center lg:justify-start items-center flex-wrap'>
                        <h2 className='font-title3 w-full'><FmdGoodIcon className='text-sm text-slate-400' /> خانه</h2>
                        <p className='font-bnazanin text-slate-600'>تهران، خیابان ******</p>
                    </div>
                    <div className='lg:w-[40%] w-[80%] flex justify-center lg:justify-start items-center flex-wrap'>
                        <span className='w-[80%] rounded-lg *:my-[10px] bg-gray-200 border flex justify-start items-center'>
                            <SearchIcon className='text-gray-400 text-xl' />
                            <input className='placeholder:font-title1 font-bnazanin font-bold bg-gray-200 w-[80%] placeholder:font-bold h-[35px]  outline-none border-none' type='text' placeholder='جستجو در اسنپ فود' />
                        </span>
                    </div>
                    <div className='lg:w-[12%] hidden lg:flex justify-center lg:justify-between items-center flex-wrap'>
                        <PersonIcon />
                        <span className='w-[70%] flex justify-center lg:justify-between items-center flex-wrap'>
                            <Link className='flex justify-center items-center relative' href='/Basket'>
                                <ListAltIcon />
                                <h2 className='font-title2'>سفارش ها</h2>
                                <span className='flex justify-center items-center w-[22px] rounded-[50%] h-[22px] bg-[#ff00a6] text-white absolute top-[-8px] right-[-3px]'>
                                    <p className='font-bnazanin'>{percart.length}</p>
                                </span>
                            </Link>
                        </span>
                    </div>
                </header>
            </section>
            <section className='w-full mt-[200px] lg:mt-[120px] flex flex-wrap justify-center items-center'>
                <Sliderpage />
            </section>
            <header className='w-full z-[100] lg:hidden fixed bottom-0 right-0 flex flex-wrap justify-center items-center'>
                <div className='w-full bg-white shadow-lg border-[2px] border-slate-100 *:my-[5px] flex justify-around items-center flex-wrap'>
                    <span className='flex cursor-pointer justify-center items-center'>
                        <Link href='/'>
                            <HomeRoundedIcon />
                        </Link>
                    </span>
                    <span className='flex cursor-pointer justify-center items-center'>
                        <Link className='relative' href='/Basket'>
                            <ListAltIcon />
                            <span className='flex justify-center items-center w-[18px] rounded-[50%] h-[18px] bg-[#ff00a6] text-white absolute top-[-5px] right-[-3px]'>
                                <p className='font-bnazanin'>{percart.length}</p>
                            </span>
                        </Link>
                    </span>
                    <span className='flex cursor-pointer justify-center items-center'>
                        <PersonIcon />
                    </span>
                    <span className='flex cursor-pointer justify-center items-center'>
                        <Link href='/Basket'>
                            <ShoppingCartCheckoutIcon />
                        </Link>
                    </span>
                </div>
            </header>
        </>
    )

}
