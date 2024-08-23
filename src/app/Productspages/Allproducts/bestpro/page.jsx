"use client"
import React from 'react'
import useFetchpro from '../../Fetchpro/page'
import StarIcon from '@mui/icons-material/Star';
import Person4Icon from '@mui/icons-material/Person4';
import Link from 'next/link';
export default function Bestallpro() {
    const allbestpro = useFetchpro('https://66be551c74dfc195586f30b3.mockapi.io/bestproducts')
    return (
        <div className='lg:w-[90%] w-full flex justify-center lg:justify-evenly flex-wrap items-start'>
            <div className='lg:w-[30%] w-[90%] flex justify-center items-center flex-wrap'>
                <div className='w-[90%] rounded-xl shadow-md my-[15px] lg:my-0 *:my-[15px] flex flex-wrap justify-center items-center'>
                    <span className='flex w-[90%] *:my-[5px] border-b-2 justify-between items-center'>
                        <h3 className='font-title2'>دارای کوپن</h3>
                        <span className='w-[45px] flex justify-center items-center h-[25px] rounded-2xl bg-slate-200 relative'>
                            <span className='w-[22.5px] shadow-sm rounded-[50%] bg-green-600 absolute top-0 left-0 h-[24px]'></span>
                        </span>
                    </span>
                    <span className='flex w-[90%] *:my-[5px] border-b-2 justify-between items-center'>
                        <h3 className='font-title2'>پیک اسنپ فود</h3>
                        <span className='w-[45px] flex justify-center items-center h-[25px] rounded-2xl bg-slate-200 relative'>
                            <span className='w-[22.5px] shadow-sm rounded-[50%] bg-green-600 absolute top-0 left-0 h-[24px]'></span>
                        </span>
                    </span>
                    <span className='flex w-[90%] *:my-[5px] border-b-2 justify-between items-center'>
                        <h3 className='font-title2'>دارای تخفیف</h3>
                        <span className='w-[45px] flex justify-center items-center h-[25px] rounded-2xl bg-slate-300 relative'>
                            <span className='w-[22.5px] shadow-sm rounded-[50%] bg-white absolute top-0 right-0 h-[24px]'></span>
                        </span>
                    </span>
                    <span className='flex w-[90%] justify-between items-center'>
                        <h3 className='font-title2'>فود پرو</h3>
                        <span className='w-[45px] flex justify-center items-center h-[25px] rounded-2xl bg-slate-200 relative'>
                            <span className='w-[22.5px] shadow-sm rounded-[50%] bg-green-600 absolute top-0 left-0 h-[24px]'></span>
                        </span>
                    </span>
                </div>
            </div>
            <div className='lg:w-[60%] w-[80%] *:my-[15px] flex flex-wrap justify-evenly items-center'>
                {allbestpro.map((item) => {
                    return (
                        <div key={item.id} className='lg:w-[30%] md:w-1/2 w-full relative shadow-md flex justify-center items-center flex-wrap'>
                            <Link className='w-full' href='/Productspages/Menuproduct'>
                                <div className='w-full flex justify-center items-center'>
                                    <img className='w-full h-full rounded-lg  object-cover' src={item.pic} alt="pic1" />
                                </div>
                                <div className='w-[80px]  absolute flex justify-center items-center lg:top-[41%] bg-white top-[51%] shadow-lg translate-x-[-50%] translate-y-[-50%]  left-[50%] h-[80px] rounded-lg'>
                                    <img className='w-[70px] h-[70px] rounded-lg object-cover' src={item.logo} alt="logo1" />
                                </div>
                                <h2 className='font-title2 mt-[30px] text-center flex justify-center items-center'>{item.title}</h2>
                                <div className='w-full flex justify-center items-center flex-wrap'>
                                    <span className='flex justify-center items-center'>
                                        <StarIcon className='text-sm text-yellow-400' />
                                        <p className='font-bnazanin'>{item.rank}</p>
                                    </span>
                                    <span className='flex justify-center items-center'>
                                        <p className='font-bnazanin px-[3px] text-[13px] text-slate-400'>({item.customer})</p>
                                    </span>
                                </div>
                                <h3 className='font-title1 text-slate-400 text-[15px]'>{item.featurs}</h3>
                                <div className='w-full my-[5px] mt-[15px] flex justify-evenly items-center flex-wrap'>
                                    <span className='flex justify-center items-center'>
                                        <Person4Icon className='pl-[3px] text-slate-600 text-sm' />
                                        <h3 className='font-title2 text-[13px] text-slate-500'>{item.post}</h3>
                                    </span>
                                    <span className='flex justify-center items-center'>
                                        <p className='font-bnazanin text-slate-700 font-semibold'>{item.pay}</p>
                                        <p className='font-bnazanin text-slate-400 pr-[4px]'>{item.val}</p>
                                    </span>
                                </div>
                            </Link>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}
