"use client"
import React from 'react'
import useFetchpro from '../Fetchpro/page'
import StarIcon from '@mui/icons-material/Star';
import Person4Icon from '@mui/icons-material/Person4';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/virtual';
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Virtual,Autoplay} from 'swiper/modules';
export default function Offpro() {
    const offpro = useFetchpro('https://66c59ca1134eb8f43494e201.mockapi.io/offFood')
    return (
        <>
            <div className='w-[90%] my-[10px] flex lg:justify-start items-center'>
                <h2 className='font-title2 w-[50%] font-semibold text-xl text-slate-700'>دارای تخفیف</h2>
            </div>
            <div className='w-[90%] hidden *:my-[20px] md:flex justify-evenly items-center flex-wrap'>
                <Swiper
                    modules={[Virtual,Autoplay]}
                    virtual
                    slidesPerView={4}
                    spaceBetween={25}
                    autoplay={{delay:2000}}
                >
                    {offpro && offpro.map((val, i) => {
                        return (
                            <>
                                <SwiperSlide key={val.id} virtualIndex={i}>
                                    <div  className='flex border-[1px] cursor-pointer border-slate-100 rounded-lg justify-center shadow-xl items-center flex-wrap'>
                                        <div className='w-full relative flex justify-center items-center'>
                                        <img className='w-full rounded-lg h-full object-cover' src={val.pic} alt="pic1" />
                                            <span className='absolute font-bold flex justify-center items-center w-[20%] py-[5px] text-[#ed0c9e] font-title2 rounded-tl-xl bg-white right-0 bottom-0'>
                                                <p className='text-[15px]'>{val.off}</p>
                                            </span>
                                        </div>
                                        <div className='w-[80px] absolute flex justify-center items-center bg-white lg:top-[40%] shadow-lg md:top-[21%] md:left-[30%] lg:left-[38%] h-[80px] rounded-lg'>
                                        <img className='w-[70px] h-[70px] rounded-lg object-cover'  src={val.logo} alt="logo1" />
                                        </div>
                                        <h2 className='font-title2 mt-[30px] text-center flex justify-center items-center'>{val.title}</h2>
                                        <div className='w-full flex justify-center items-center flex-wrap'>
                                            <span className='flex justify-center items-center'>
                                                <StarIcon className='text-sm text-yellow-400' />
                                                <p className='font-bnazanin'>{val.rank}</p>
                                            </span>
                                            <span className='flex justify-center items-center'>
                                                <p className='font-bnazanin px-[3px] text-[13px] text-slate-400'>({val.customer})</p>
                                            </span>
                                        </div>
                                        <h3 className='font-title1 text-slate-400 text-[15px]'>{val.featurs}</h3>
                                        <div className='w-full my-[5px] mt-[15px] flex justify-evenly items-center flex-wrap'>
                                            <span className='flex justify-center items-center'>
                                                <Person4Icon className='pl-[3px] text-slate-600 text-sm' />
                                                <h3 className='font-title2 text-[13px] text-slate-500'>{val.post}</h3>
                                            </span>
                                            <span className='flex justify-center items-center'>
                                                <p className='font-bnazanin text-slate-700 font-semibold'>{val.pay}</p>
                                                <p className='font-bnazanin text-slate-400 pr-[4px]'>{val.val}</p>
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </>
                        )
                    })}

                </Swiper>
            </div>
            {/* ///////////////////////Mobile show////////////////////// */}
            <div className='w-[90%] *:my-[20px] md:hidden flex justify-evenly items-center flex-wrap'>
                <Swiper
                    modules={[Virtual, Autoplay]}
                    virtual
                    slidesPerView={1}
                    spaceBetween={25}
                    autoplay={{ delay: 2000 }}
                >
                    {offpro && offpro.map((val, i) => {
                        return (
                            <>
                                <SwiperSlide key={val.id} virtualIndex={i}>
                                    <div className='flex border-[1px] cursor-pointer border-slate-100 relative rounded-lg justify-center shadow-xl items-center flex-wrap'>
                                        <div className='w-full flex justify-center items-center'>
                                        <img className='w-full rounded-lg h-full object-cover' src={val.pic} alt="pic1" />
                                        </div>
                                        <div className='w-[80px] md:hidden absolute flex justify-center items-center bg-white top-[51%] shadow-lg translate-x-[-50%] translate-y-[-50%]  left-[50%] h-[80px] rounded-lg'>
                                        <img className='w-[70px] h-[70px] rounded-lg object-cover'  src={val.logo} alt="logo1" />
                                        </div>
                                        <h2 className='font-title2 mt-[30px] text-center flex justify-center items-center'>{val.title}</h2>
                                        <div className='w-full flex justify-center items-center flex-wrap'>
                                            <span className='flex justify-center items-center'>
                                                <StarIcon className='text-sm text-yellow-400' />
                                                <p className='font-bnazanin'>{val.rank}</p>
                                            </span>
                                            <span className='flex justify-center items-center'>
                                                <p className='font-bnazanin px-[3px] text-[13px] text-slate-400'>({val.customer})</p>
                                            </span>
                                        </div>
                                        <h3 className='font-title1 text-slate-400 text-[15px]'>{val.featurs}</h3>
                                        <div className='w-full my-[5px] mt-[15px] flex justify-evenly items-center flex-wrap'>
                                            <span className='flex justify-center items-center'>
                                                <Person4Icon className='pl-[3px] text-slate-600 text-sm' />
                                                <h3 className='font-title2 text-[13px] text-slate-500'>{val.post}</h3>
                                            </span>
                                            <span className='flex justify-center items-center'>
                                                <p className='font-bnazanin text-slate-700 font-semibold'>{val.pay}</p>
                                                <p className='font-bnazanin text-slate-400 pr-[4px]'>{val.val}</p>
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </>
                        )
                    })}

                </Swiper>
            </div>
        </>
    )
}