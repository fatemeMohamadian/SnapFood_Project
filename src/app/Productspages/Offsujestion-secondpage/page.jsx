"use client"
import React, { useEffect, useRef, useState } from 'react'
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import StarIcon from '@mui/icons-material/Star';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
export default function Offchoise() {
    const [stimer, setStimer] = useState(59)
    const [mtimer, setMtimer] = useState(59)
    const [htimer, setHtimer] = useState(3)
    useEffect(() => {
        const time = setInterval(() => {
            if (stimer > 0) {
                setStimer(stimer - 1)
            }
            else {
                setStimer(59)
                if (mtimer > 0) {
                    setMtimer(mtimer - 1)
                }
                else {
                    setMtimer(59)
                    if (htimer > 1) {
                        setHtimer(htimer - 1)
                    }
                    else if (htimer == 1) {

                        setMtimer(0)
                        setHtimer(0)
                    }
                    else {
                        setHtimer(0)
                        setMtimer(0)
                        setStimer(0)
                    }
                }
            }
            return clearInterval(time)
        }, 1000);
        // return clearInterval(time)
    }, [stimer], [mtimer], [htimer])
    return (
        <div className='w-[90%] *:my-[50px] rounded-lg lg:rounded-br-[14%] bg-bggrad flex flex-wrap justify-evenly items-center'>
            <div className='lg:w-[16%] w-[90%] *:my-[15px] flex justify-center items-center flex-wrap'>
                <div className='w-full flex justify-center items-center'>
                    <div className='text-white flex *:px-[2px] justify-center items-center font-bold text-2xl font-bnazanin'>
                        <span>{stimer}</span>
                        <span>:{mtimer}</span>
                        <span>:0{htimer}</span>
                    </div>
                    <WatchLaterOutlinedIcon className='text-white text-lg' />
                </div>
                <div className='w-full flex justify-center items-center'>
                    <Image width={110} height={100} style={{ objectFit: 'cover' }} alt='offpic' src='/offf.png' />
                </div>
                <div className='w-full flex justify-center items-center'>
                    <AutoAwesomeIcon className='text-pink-200 rotate-[180deg]' />
                    <h1 className='font-title text-white text-2xl pr-[10px]'>شام و ناهار</h1>
                </div>
                <p className='font-title2 text-[13px] w-full text-center text-white'>تخفیفات لحظه ای برای شما</p>
                <span className='lg:w-[62%] w-[50%] cursor-pointer bg-white rounded-3xl *:my-[2px] border flex justify-around group transition-all duration-500 items-center'>
                    <p className='font-bnazanin text-slate-800 font-bold text-lg'>مشاهده همه</p>
                    <KeyboardArrowLeftIcon className='text-slate-700 group-hover:translate-x-[-3px] transition-all duration-500' />
                </span>
            </div>
            <div className='w-[75%] hidden lg:flex flex-wrap justify-center items-center'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={4}
                    loop={true}
                    autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                >
                    <SwiperSlide>
                        <div className='flex justify-center rounded-lg shadow-lg bg-white items-center flex-wrap'>
                            <span className='w-full mt-[10px] *:text-gray-600 flex *:font-bnazanin *:font-bold *:text-sm text-center justify-center items-center flex-wrap *:w-full'>
                                <p>تله پیتزا ( پیروزی )</p>
                                <p>پیک فروشنده رایگان</p>
                            </span>
                            <div className='w-full my-[25px] flex justify-center items-center'>
                                <Image className='rounded-lg' width={120} height={100} alt='prooff1' style={{ objectFit: 'cover' }} src='/prooff1.jpeg' />
                            </div>
                            <h2 className='font-title2 text-sm my-[10px] text-center flex justify-center items-center'>پیتزا چیکن آلفردو ( 30 سانتی )</h2>
                            <span className='flex justify-between my-[10px] items-center w-[90%]'>
                                <p className='font-bnazanin font-semibold'>4.3<StarIcon className='text-sm text-yellow-400' /></p>
                                <span className='flex justify-center items-center'>
                                    <del className='font-bnazanin text-gray-400 text-sm'>381,900</del>
                                    <span className='font-bnazanin border font-bold flex justify-center items-center text-sm rounded-lg px-[10px] text-white bg-[#ff00a6]'>
                                        <p>30%</p>
                                    </span>
                                </span>
                            </span>
                            <span className='w-[90%] flex justify-between items-center'>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='font-bold pl-[2px]'>4</span>
                                    <span className='text-slate-600'>عدد باقی مانده</span>
                                </div>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='font-bold pl-[2px]'>267,330</span>
                                    <span className='text-slate-500'>تومان</span>
                                </div>
                            </span>
                            <div className='w-[88%] my-[20px] border-[1px] border-slate-400'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center rounded-lg bg-white items-center flex-wrap shadow-lg'>
                            <span className='w-full mt-[10px] *:text-gray-600 flex *:font-bnazanin *:font-bold *:text-sm text-center justify-center items-center flex-wrap *:w-full'>
                                <p>تله پیتزا ( پیروزی )</p>
                                <p>پیک فروشنده رایگان</p>
                            </span>
                            <div className='w-full my-[25px] flex justify-center items-center'>
                                <Image className='rounded-lg' width={120} height={100} alt='prooff2' style={{ objectFit: 'cover' }} src='/prooff2.jpeg' />
                            </div>
                            <h2 className='font-title2 text-sm my-[10px] text-center flex justify-center items-center'>ماشروم برگر</h2>
                            <span className='flex justify-between my-[10px] items-center w-[90%]'>
                                <p className='font-bnazanin font-semibold'>4.6<StarIcon className='text-sm text-yellow-400' /></p>
                                <span className='flex justify-center items-center'>
                                    <del className='font-bnazanin text-gray-400 text-sm'>254,900</del>
                                    <span className='font-bnazanin border font-bold flex justify-center items-center text-sm rounded-lg px-[10px] text-white bg-[#ff00a6]'>
                                        <p>30%</p>
                                    </span>
                                </span>
                            </span>
                            <span className='w-[90%] flex justify-between items-center'>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='font-bold pl-[2px] text-red-500'>1</span>
                                    <span className='text-red-400'>عدد باقی مانده</span>
                                </div>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='font-bold pl-[2px]'>178,430</span>
                                    <span className='text-slate-500'>تومان</span>
                                </div>
                            </span>
                            <div className='w-[88%] my-[20px] border-[1px] border-red-600'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex grayscale-[100] justify-center  rounded-lg bg-white items-center flex-wrap shadow-lg'>
                            <span className='w-full mt-[10px] *:text-slate-400 flex *:font-bnazanin *:font-bold *:text-sm text-center justify-center items-center flex-wrap *:w-full'>
                                <p>رستوران ارغوان</p>
                                <p>پیک فروشنده رایگان</p>
                            </span>
                            <div className='w-full my-[25px] flex justify-center items-center'>
                                <Image className='rounded-lg' width={120} height={100} alt='prooff3' style={{ objectFit: 'cover' }} src='/prooff7.jpeg' />
                            </div>
                            <h2 className='font-title2 text-slate-400 text-sm my-[10px] text-center flex justify-center items-center'>پیتزا سبزیجات ایتالیایی</h2>
                            <span className='flex justify-between my-[10px] items-center w-[90%]'>
                                <p className='font-bnazanin text-slate-400 font-semibold'>4.0<StarIcon className='text-sm text-yellow-400' /></p>
                                <span className='flex justify-center items-center'>
                                    <del className='font-bnazanin text-gray-400 text-sm'>115,000</del>
                                    <span className='font-bnazanin border font-bold flex justify-center items-center text-sm rounded-lg px-[10px] text-slate-400 bg-[#ff00a6]'>
                                        <p>30%</p>
                                    </span>
                                </span>
                            </span>
                            <span className='w-[90%] flex justify-between items-center'>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='text-slate-600'>اتمام موجودی</span>
                                </div>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='font-bold text-sm text-slate-400 pl-[2px]'>80,500</span>
                                    <span className='text-slate-400 text-sm'>تومان</span>
                                </div>
                            </span>
                            <div className='w-[88%] my-[20px] border-[1px] border-slate-400'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center rounded-lg bg-white items-center flex-wrap shadow-lg'>
                            <span className='w-full mt-[10px] *:text-gray-600 flex *:font-bnazanin *:font-bold *:text-sm text-center justify-center items-center flex-wrap *:w-full'>
                                <p>پیتزا پارک (محلاتی)</p>
                                <p>پیک فروشنده (12000 تومان)</p>
                            </span>
                            <div className='w-full my-[25px] flex justify-center items-center'>
                                <Image className='rounded-lg' width={120} height={100} alt='prooff4' style={{ objectFit: 'cover' }} src='/prooff6.jpg' />
                            </div>
                            <h2 className='font-title2 text-sm my-[10px] text-center flex justify-center items-center'>پیتزا پپرونی آمریکایی (4نفره)</h2>
                            <span className='flex justify-between my-[10px] items-center w-[90%]'>
                                <p className='font-bnazanin font-semibold'>3.7<StarIcon className='text-sm text-yellow-400' /></p>
                                <span className='flex justify-center items-center'>
                                    <del className='font-bnazanin text-gray-400 text-sm'>265,000</del>
                                    <span className='font-bnazanin border font-bold flex justify-center items-center text-sm rounded-lg px-[10px] text-white bg-[#ff00a6]'>
                                        <p>30%</p>
                                    </span>
                                </span>
                            </span>
                            <span className='w-[90%] flex justify-between items-center'>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='font-bold pl-[2px]'>9</span>
                                    <span className='text-slate-600'>عدد باقی مانده</span>
                                </div>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='font-bold pl-[2px]'>185,500</span>
                                    <span className='text-slate-500'>تومان</span>
                                </div>
                            </span>
                            <div className='w-[88%] my-[20px] border-[1px] border-slate-400'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center rounded-lg bg-white items-center flex-wrap shadow-lg'>
                            <span className='w-full mt-[10px] *:text-gray-600 flex *:font-bnazanin *:font-bold *:text-sm text-center justify-center items-center flex-wrap *:w-full'>
                                <p>پیتزا پارک (خاوران)</p>
                                <p>پیک فروشنده (7000 تومان)</p>
                            </span>
                            <div className='w-full my-[25px] flex justify-center items-center'>
                                <Image className='rounded-lg' width={120} height={100} alt='prooff5' style={{ objectFit: 'cover' }} src='/prooff9.jpeg' />
                            </div>
                            <h2 className='font-title2 text-sm my-[10px] text-center flex justify-center items-center'>پیتزا گوشت و قارچ آمریکایی</h2>
                            <span className='flex justify-between my-[10px] items-center w-[90%]'>
                                <p className='font-bnazanin font-semibold'>3.7<StarIcon className='text-sm text-yellow-400' /></p>
                                <span className='flex justify-center items-center'>
                                    <del className='font-bnazanin text-gray-400 text-sm'>300,000</del>
                                    <span className='font-bnazanin border font-bold flex justify-center items-center text-sm rounded-lg px-[10px] text-white bg-[#ff00a6]'>
                                        <p>30%</p>
                                    </span>
                                </span>
                            </span>
                            <span className='w-[90%] flex justify-between items-center'>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='font-bold pl-[2px]'>6</span>
                                    <span className='text-slate-600'>عدد باقی مانده</span>
                                </div>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='font-bold pl-[2px]'>210,000</span>
                                    <span className='text-slate-500'>تومان</span>
                                </div>
                            </span>
                            <div className='w-[88%] my-[20px] border-[1px] border-slate-400'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center rounded-lg bg-white items-center flex-wrap shadow-lg'>
                            <span className='w-full mt-[10px] *:text-gray-600 flex *:font-bnazanin *:font-bold *:text-sm text-center justify-center items-center flex-wrap *:w-full'>
                                <p>غذای انصار</p>
                                <p>پیک فروشنده (10,000 تومان)</p>
                            </span>
                            <div className='w-full my-[25px] flex justify-center items-center'>
                                <Image className='rounded-lg' width={120} height={100} alt='prooff6' style={{ objectFit: 'cover' }} src='/prooff3.jpeg' />
                            </div>
                            <h2 className='font-title2 text-sm my-[10px] text-center flex justify-center items-center'>ته چین با چلوکباب کوبیده دوسیخ</h2>
                            <span className='flex justify-between my-[10px] items-center w-[90%]'>
                                <p className='font-bnazanin font-semibold'>4.5<StarIcon className='text-sm text-yellow-400' /></p>
                                <span className='flex justify-center items-center'>
                                    <del className='font-bnazanin text-gray-400 text-sm'>353,000</del>
                                    <span className='font-bnazanin border font-bold flex justify-center items-center text-sm rounded-lg px-[10px] text-white bg-[#ff00a6]'>
                                        <p>30%</p>
                                    </span>
                                </span>
                            </span>
                            <span className='w-[90%] flex justify-between items-center'>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='font-bold pl-[2px]'>3</span>
                                    <span className='text-slate-600'>عدد باقی مانده</span>
                                </div>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='font-bold pl-[2px]'>247,100</span>
                                    <span className='text-slate-500'>تومان</span>
                                </div>
                            </span>
                            <div className='w-[88%] my-[20px] border-[1px] border-slate-400'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex grayscale-[100] justify-center  rounded-lg bg-white items-center flex-wrap shadow-lg'>
                            <span className='w-full mt-[10px] *:text-slate-400 flex *:font-bnazanin *:font-bold *:text-sm text-center justify-center items-center flex-wrap *:w-full'>
                                <p>هایدا (میدان قیام)</p>
                                <p>پیک فروشنده (7000 تومان)</p>
                            </span>
                            <div className='w-full my-[25px] flex justify-center items-center'>
                                <Image className='rounded-lg' width={120} height={100} alt='prooff7' style={{ objectFit: 'cover' }} src='/prooff4.jpg' />
                            </div>
                            <h2 className='font-title2 text-slate-400 text-sm my-[10px] text-center flex justify-center items-center'>ساندویچ ژامبون گوشت ژیگو</h2>
                            <span className='flex justify-between my-[10px] items-center w-[90%]'>
                                <p className='font-bnazanin text-slate-400 font-semibold'>4.2<StarIcon className='text-sm text-yellow-400' /></p>
                                <span className='flex justify-center items-center'>
                                    <del className='font-bnazanin text-gray-400 text-sm'>99,000</del>
                                    <span className='font-bnazanin border font-bold flex justify-center items-center text-sm rounded-lg px-[10px] text-slate-400 bg-[#ff00a6]'>
                                        <p>30%</p>
                                    </span>
                                </span>
                            </span>
                            <span className='w-[90%] flex justify-between items-center'>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='text-slate-600'>اتمام موجودی</span>
                                </div>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='font-bold text-sm text-slate-400 pl-[2px]'>69,300</span>
                                    <span className='text-slate-400 text-sm'>تومان</span>
                                </div>
                            </span>
                            <div className='w-[88%] my-[20px] border-[1px] border-slate-400'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center rounded-lg bg-white items-center flex-wrap shadow-lg'>
                            <span className='w-full mt-[10px] *:text-gray-600 flex *:font-bnazanin *:font-bold *:text-sm text-center justify-center items-center flex-wrap *:w-full'>
                                <p>رستوران ارغوان</p>
                                <p>پیک فروشنده رایگان</p>
                            </span>
                            <div className='w-full my-[25px] flex justify-center items-center'>
                                <Image className='rounded-lg' width={120} height={100} alt='prooff8' style={{ objectFit: 'cover' }} src='/prooff8.jpeg' />
                            </div>
                            <h2 className='font-title2 text-sm my-[10px] text-center flex justify-center items-center'>چلوکباب لقمه مخصوص</h2>
                            <span className='flex justify-between my-[10px] items-center w-[90%]'>
                                <p className='font-bnazanin font-semibold'>3.9<StarIcon className='text-sm text-yellow-400' /></p>
                                <span className='flex justify-center items-center'>
                                    <del className='font-bnazanin text-gray-400 text-sm'>120,000</del>
                                    <span className='font-bnazanin border font-bold flex justify-center items-center text-sm rounded-lg px-[10px] text-white bg-[#ff00a6]'>
                                        <p>30%</p>
                                    </span>
                                </span>
                            </span>
                            <span className='w-[90%] flex justify-between items-center'>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='font-bold pl-[2px]'>5</span>
                                    <span className='text-slate-600'>عدد باقی مانده</span>
                                </div>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='font-bold pl-[2px]'>84,000</span>
                                    <span className='text-slate-500'>تومان</span>
                                </div>
                            </span>
                            <div className='w-[88%] my-[20px] border-[1px] border-slate-400'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center rounded-lg bg-white items-center flex-wrap shadow-lg'>
                            <span className='w-full mt-[10px] *:text-gray-600 flex *:font-bnazanin *:font-bold *:text-sm text-center justify-center items-center flex-wrap *:w-full'>
                                <p>باماهاس (30 تیر)</p>
                                <p>پیک فروشنده ( 15,000 تومان )</p>
                            </span>
                            <div className='w-full my-[25px] flex justify-center items-center'>
                                <Image className='rounded-lg' width={120} height={100} alt='prooff9' style={{ objectFit: 'cover' }} src='/prooff5.jpg' />
                            </div>
                            <h2 className='font-title2 text-sm my-[10px] text-center flex justify-center items-center'>ساندویچ بیکن مخصوص باماهاس</h2>
                            <span className='flex justify-between my-[10px] items-center w-[90%]'>
                                <p className='font-bnazanin font-semibold'>4.2<StarIcon className='text-sm text-yellow-400' /></p>
                                <span className='flex justify-center items-center'>
                                    <del className='font-bnazanin text-gray-400 text-sm'>389,000</del>
                                    <span className='font-bnazanin border font-bold flex justify-center items-center text-sm rounded-lg px-[10px] text-white bg-[#ff00a6]'>
                                        <p>30%</p>
                                    </span>
                                </span>
                            </span>
                            <span className='w-[90%] flex justify-between items-center'>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='font-bold pl-[2px]'>8</span>
                                    <span className='text-slate-600'>عدد باقی مانده</span>
                                </div>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='font-bold pl-[2px]'>272,300</span>
                                    <span className='text-slate-500'>تومان</span>
                                </div>
                            </span>
                            <div className='w-[88%] my-[20px] border-[1px] border-slate-400'></div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            {/* //// mobile slider//// */}
            <div className='w-[85%] lg:hidden flex flex-wrap justify-center items-center'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                >
                    <SwiperSlide>
                        <div className='flex justify-center rounded-lg shadow-lg bg-white items-center flex-wrap'>
                            <span className='w-full mt-[10px] *:text-gray-600 flex *:font-bnazanin *:font-bold *:text-sm text-center justify-center items-center flex-wrap *:w-full'>
                                <p>تله پیتزا ( پیروزی )</p>
                                <p>پیک فروشنده رایگان</p>
                            </span>
                            <div className='w-full my-[25px] flex justify-center items-center'>
                                <Image className='rounded-lg' width={120} height={100} alt='prooff1' style={{ objectFit: 'cover' }} src='/prooff1.jpeg' />
                            </div>
                            <h2 className='font-title2 text-sm my-[10px] text-center flex justify-center items-center'>پیتزا چیکن آلفردو ( 30 سانتی )</h2>
                            <span className='flex justify-between my-[10px] items-center w-[90%]'>
                                <p className='font-bnazanin font-semibold'>4.3<StarIcon className='text-sm text-yellow-400' /></p>
                                <span className='flex justify-center items-center'>
                                    <del className='font-bnazanin text-gray-400 text-sm'>381,900</del>
                                    <span className='font-bnazanin border font-bold flex justify-center items-center text-sm rounded-lg px-[10px] text-white bg-[#ff00a6]'>
                                        <p>30%</p>
                                    </span>
                                </span>
                            </span>
                            <span className='w-[90%] flex justify-between items-center'>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='font-bold pl-[2px]'>4</span>
                                    <span className='text-slate-600'>عدد باقی مانده</span>
                                </div>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='font-bold pl-[2px]'>267,330</span>
                                    <span className='text-slate-500'>تومان</span>
                                </div>
                            </span>
                            <div className='w-[88%] my-[20px] border-[1px] border-slate-400'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center rounded-lg bg-white items-center flex-wrap shadow-lg'>
                            <span className='w-full mt-[10px] *:text-gray-600 flex *:font-bnazanin *:font-bold *:text-sm text-center justify-center items-center flex-wrap *:w-full'>
                                <p>تله پیتزا ( پیروزی )</p>
                                <p>پیک فروشنده رایگان</p>
                            </span>
                            <div className='w-full my-[25px] flex justify-center items-center'>
                                <Image className='rounded-lg' width={120} height={100} alt='prooff2' style={{ objectFit: 'cover' }} src='/prooff2.jpeg' />
                            </div>
                            <h2 className='font-title2 text-sm my-[10px] text-center flex justify-center items-center'>ماشروم برگر</h2>
                            <span className='flex justify-between my-[10px] items-center w-[90%]'>
                                <p className='font-bnazanin font-semibold'>4.6<StarIcon className='text-sm text-yellow-400' /></p>
                                <span className='flex justify-center items-center'>
                                    <del className='font-bnazanin text-gray-400 text-sm'>254,900</del>
                                    <span className='font-bnazanin border font-bold flex justify-center items-center text-sm rounded-lg px-[10px] text-white bg-[#ff00a6]'>
                                        <p>30%</p>
                                    </span>
                                </span>
                            </span>
                            <span className='w-[90%] flex justify-between items-center'>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='font-bold pl-[2px] text-red-500'>1</span>
                                    <span className='text-red-400'>عدد باقی مانده</span>
                                </div>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='font-bold pl-[2px]'>178,430</span>
                                    <span className='text-slate-500'>تومان</span>
                                </div>
                            </span>
                            <div className='w-[88%] my-[20px] border-[1px] border-red-600'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex grayscale-[100] justify-center  rounded-lg bg-white items-center flex-wrap shadow-lg'>
                            <span className='w-full mt-[10px] *:text-slate-400 flex *:font-bnazanin *:font-bold *:text-sm text-center justify-center items-center flex-wrap *:w-full'>
                                <p>رستوران ارغوان</p>
                                <p>پیک فروشنده رایگان</p>
                            </span>
                            <div className='w-full my-[25px] flex justify-center items-center'>
                                <Image className='rounded-lg' width={120} height={100} alt='prooff3' style={{ objectFit: 'cover' }} src='/prooff7.jpeg' />
                            </div>
                            <h2 className='font-title2 text-slate-400 text-sm my-[10px] text-center flex justify-center items-center'>پیتزا سبزیجات ایتالیایی</h2>
                            <span className='flex justify-between my-[10px] items-center w-[90%]'>
                                <p className='font-bnazanin text-slate-400 font-semibold'>4.0<StarIcon className='text-sm text-yellow-400' /></p>
                                <span className='flex justify-center items-center'>
                                    <del className='font-bnazanin text-gray-400 text-sm'>115,000</del>
                                    <span className='font-bnazanin border font-bold flex justify-center items-center text-sm rounded-lg px-[10px] text-slate-400 bg-[#ff00a6]'>
                                        <p>30%</p>
                                    </span>
                                </span>
                            </span>
                            <span className='w-[90%] flex justify-between items-center'>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='text-slate-600'>اتمام موجودی</span>
                                </div>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='font-bold text-sm text-slate-400 pl-[2px]'>80,500</span>
                                    <span className='text-slate-400 text-sm'>تومان</span>
                                </div>
                            </span>
                            <div className='w-[88%] my-[20px] border-[1px] border-slate-400'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center rounded-lg bg-white items-center flex-wrap shadow-lg'>
                            <span className='w-full mt-[10px] *:text-gray-600 flex *:font-bnazanin *:font-bold *:text-sm text-center justify-center items-center flex-wrap *:w-full'>
                                <p>پیتزا پارک (محلاتی)</p>
                                <p>پیک فروشنده (12000 تومان)</p>
                            </span>
                            <div className='w-full my-[25px] flex justify-center items-center'>
                                <Image className='rounded-lg' width={120} height={100} alt='prooff4' style={{ objectFit: 'cover' }} src='/prooff6.jpg' />
                            </div>
                            <h2 className='font-title2 text-sm my-[10px] text-center flex justify-center items-center'>پیتزا پپرونی آمریکایی (4نفره)</h2>
                            <span className='flex justify-between my-[10px] items-center w-[90%]'>
                                <p className='font-bnazanin font-semibold'>3.7<StarIcon className='text-sm text-yellow-400' /></p>
                                <span className='flex justify-center items-center'>
                                    <del className='font-bnazanin text-gray-400 text-sm'>265,000</del>
                                    <span className='font-bnazanin border font-bold flex justify-center items-center text-sm rounded-lg px-[10px] text-white bg-[#ff00a6]'>
                                        <p>30%</p>
                                    </span>
                                </span>
                            </span>
                            <span className='w-[90%] flex justify-between items-center'>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='font-bold pl-[2px]'>9</span>
                                    <span className='text-slate-600'>عدد باقی مانده</span>
                                </div>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='font-bold pl-[2px]'>185,500</span>
                                    <span className='text-slate-500'>تومان</span>
                                </div>
                            </span>
                            <div className='w-[88%] my-[20px] border-[1px] border-slate-400'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center rounded-lg bg-white items-center flex-wrap shadow-lg'>
                            <span className='w-full mt-[10px] *:text-gray-600 flex *:font-bnazanin *:font-bold *:text-sm text-center justify-center items-center flex-wrap *:w-full'>
                                <p>پیتزا پارک (خاوران)</p>
                                <p>پیک فروشنده (7000 تومان)</p>
                            </span>
                            <div className='w-full my-[25px] flex justify-center items-center'>
                                <Image className='rounded-lg' width={120} height={100} alt='prooff5' style={{ objectFit: 'cover' }} src='/prooff9.jpeg' />
                            </div>
                            <h2 className='font-title2 text-sm my-[10px] text-center flex justify-center items-center'>پیتزا گوشت و قارچ آمریکایی</h2>
                            <span className='flex justify-between my-[10px] items-center w-[90%]'>
                                <p className='font-bnazanin font-semibold'>3.7<StarIcon className='text-sm text-yellow-400' /></p>
                                <span className='flex justify-center items-center'>
                                    <del className='font-bnazanin text-gray-400 text-sm'>300,000</del>
                                    <span className='font-bnazanin border font-bold flex justify-center items-center text-sm rounded-lg px-[10px] text-white bg-[#ff00a6]'>
                                        <p>30%</p>
                                    </span>
                                </span>
                            </span>
                            <span className='w-[90%] flex justify-between items-center'>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='font-bold pl-[2px]'>6</span>
                                    <span className='text-slate-600'>عدد باقی مانده</span>
                                </div>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='font-bold pl-[2px]'>210,000</span>
                                    <span className='text-slate-500'>تومان</span>
                                </div>
                            </span>
                            <div className='w-[88%] my-[20px] border-[1px] border-slate-400'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center rounded-lg bg-white items-center flex-wrap shadow-lg'>
                            <span className='w-full mt-[10px] *:text-gray-600 flex *:font-bnazanin *:font-bold *:text-sm text-center justify-center items-center flex-wrap *:w-full'>
                                <p>غذای انصار</p>
                                <p>پیک فروشنده (10,000 تومان)</p>
                            </span>
                            <div className='w-full my-[25px] flex justify-center items-center'>
                                <Image className='rounded-lg' width={120} height={100} alt='prooff6' style={{ objectFit: 'cover' }} src='/prooff3.jpeg' />
                            </div>
                            <h2 className='font-title2 text-sm my-[10px] text-center flex justify-center items-center'>ته چین با چلوکباب کوبیده دوسیخ</h2>
                            <span className='flex justify-between my-[10px] items-center w-[90%]'>
                                <p className='font-bnazanin font-semibold'>4.5<StarIcon className='text-sm text-yellow-400' /></p>
                                <span className='flex justify-center items-center'>
                                    <del className='font-bnazanin text-gray-400 text-sm'>353,000</del>
                                    <span className='font-bnazanin border font-bold flex justify-center items-center text-sm rounded-lg px-[10px] text-white bg-[#ff00a6]'>
                                        <p>30%</p>
                                    </span>
                                </span>
                            </span>
                            <span className='w-[90%] flex justify-between items-center'>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='font-bold pl-[2px]'>3</span>
                                    <span className='text-slate-600'>عدد باقی مانده</span>
                                </div>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='font-bold pl-[2px]'>247,100</span>
                                    <span className='text-slate-500'>تومان</span>
                                </div>
                            </span>
                            <div className='w-[88%] my-[20px] border-[1px] border-slate-400'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex grayscale-[100] justify-center  rounded-lg bg-white items-center flex-wrap shadow-lg'>
                            <span className='w-full mt-[10px] *:text-slate-400 flex *:font-bnazanin *:font-bold *:text-sm text-center justify-center items-center flex-wrap *:w-full'>
                                <p>هایدا (میدان قیام)</p>
                                <p>پیک فروشنده (7000 تومان)</p>
                            </span>
                            <div className='w-full my-[25px] flex justify-center items-center'>
                                <Image className='rounded-lg' width={120} height={100} alt='prooff7' style={{ objectFit: 'cover' }} src='/prooff4.jpg' />
                            </div>
                            <h2 className='font-title2 text-slate-400 text-sm my-[10px] text-center flex justify-center items-center'>ساندویچ ژامبون گوشت ژیگو</h2>
                            <span className='flex justify-between my-[10px] items-center w-[90%]'>
                                <p className='font-bnazanin text-slate-400 font-semibold'>4.2<StarIcon className='text-sm text-yellow-400' /></p>
                                <span className='flex justify-center items-center'>
                                    <del className='font-bnazanin text-gray-400 text-sm'>99,000</del>
                                    <span className='font-bnazanin border font-bold flex justify-center items-center text-sm rounded-lg px-[10px] text-slate-400 bg-[#ff00a6]'>
                                        <p>30%</p>
                                    </span>
                                </span>
                            </span>
                            <span className='w-[90%] flex justify-between items-center'>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='text-slate-600'>اتمام موجودی</span>
                                </div>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='font-bold text-sm text-slate-400 pl-[2px]'>69,300</span>
                                    <span className='text-slate-400 text-sm'>تومان</span>
                                </div>
                            </span>
                            <div className='w-[88%] my-[20px] border-[1px] border-slate-400'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center rounded-lg bg-white items-center flex-wrap shadow-lg'>
                            <span className='w-full mt-[10px] *:text-gray-600 flex *:font-bnazanin *:font-bold *:text-sm text-center justify-center items-center flex-wrap *:w-full'>
                                <p>رستوران ارغوان</p>
                                <p>پیک فروشنده رایگان</p>
                            </span>
                            <div className='w-full my-[25px] flex justify-center items-center'>
                                <Image className='rounded-lg' width={120} height={100} alt='prooff8' style={{ objectFit: 'cover' }} src='/prooff8.jpeg' />
                            </div>
                            <h2 className='font-title2 text-sm my-[10px] text-center flex justify-center items-center'>چلوکباب لقمه مخصوص</h2>
                            <span className='flex justify-between my-[10px] items-center w-[90%]'>
                                <p className='font-bnazanin font-semibold'>3.9<StarIcon className='text-sm text-yellow-400' /></p>
                                <span className='flex justify-center items-center'>
                                    <del className='font-bnazanin text-gray-400 text-sm'>120,000</del>
                                    <span className='font-bnazanin border font-bold flex justify-center items-center text-sm rounded-lg px-[10px] text-white bg-[#ff00a6]'>
                                        <p>30%</p>
                                    </span>
                                </span>
                            </span>
                            <span className='w-[90%] flex justify-between items-center'>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='font-bold pl-[2px]'>5</span>
                                    <span className='text-slate-600'>عدد باقی مانده</span>
                                </div>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='font-bold pl-[2px]'>84,000</span>
                                    <span className='text-slate-500'>تومان</span>
                                </div>
                            </span>
                            <div className='w-[88%] my-[20px] border-[1px] border-slate-400'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center rounded-lg bg-white items-center flex-wrap shadow-lg'>
                            <span className='w-full mt-[10px] *:text-gray-600 flex *:font-bnazanin *:font-bold *:text-sm text-center justify-center items-center flex-wrap *:w-full'>
                                <p>باماهاس (30 تیر)</p>
                                <p>پیک فروشنده ( 15,000 تومان )</p>
                            </span>
                            <div className='w-full my-[25px] flex justify-center items-center'>
                                <Image className='rounded-lg' width={120} height={100} alt='prooff9' style={{ objectFit: 'cover' }} src='/prooff5.jpg' />
                            </div>
                            <h2 className='font-title2 text-sm my-[10px] text-center flex justify-center items-center'>ساندویچ بیکن مخصوص باماهاس</h2>
                            <span className='flex justify-between my-[10px] items-center w-[90%]'>
                                <p className='font-bnazanin font-semibold'>4.2<StarIcon className='text-sm text-yellow-400' /></p>
                                <span className='flex justify-center items-center'>
                                    <del className='font-bnazanin text-gray-400 text-sm'>389,000</del>
                                    <span className='font-bnazanin border font-bold flex justify-center items-center text-sm rounded-lg px-[10px] text-white bg-[#ff00a6]'>
                                        <p>30%</p>
                                    </span>
                                </span>
                            </span>
                            <span className='w-[90%] flex justify-between items-center'>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='font-bold pl-[2px]'>8</span>
                                    <span className='text-slate-600'>عدد باقی مانده</span>
                                </div>
                                <div className='flex *:font-bnazanin justify-center items-center'>
                                    <span className='font-bold pl-[2px]'>272,300</span>
                                    <span className='text-slate-500'>تومان</span>
                                </div>
                            </span>
                            <div className='w-[88%] my-[20px] border-[1px] border-slate-400'></div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
