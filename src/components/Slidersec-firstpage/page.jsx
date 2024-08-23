"use client"
import React from 'react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Slidersec() {
    return (
        <>
            <div className='w-[90%] *:my-[10px] hidden lg:flex flex-wrap justify-center items-center'>
                <Swiper className='h-[25vh]'
                    // install Swiper modules
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={9}
                    navigation={true}
                    loop={false}
                    autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                >
                    <SwiperSlide>
                        <figure className='flex rounded-sm cursor-pointer bg-[#f9fafb] shadow-md border-[1px] border-slate-200 flex-wrap  justify-center items-center'>
                            <Image alt='slide1' width={100} height={100} style={{objectFit:'cover'}} src='/slide1.png' />
                            <figcaption className='w-full pb-[10px] flex justify-center items-center'>
                                <h2 className='font-title2'>رستوران</h2>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className='flex cursor-pointer flex-wrap rounded-sm bg-[#f9fafb] shadow-md border-[1px] border-slate-200 justify-center items-center'>
                            <Image alt='slide2' width={100} height={100} style={{objectFit:'cover'}} src='/slide2.png' />
                            <figcaption className='w-full pb-[10px] flex justify-center items-center'>
                                <h2 className='font-title2'>سوپرمارکت</h2>
                            </figcaption>
                        </figure></SwiperSlide>
                    <SwiperSlide>
                        <figure className='flex cursor-pointer flex-wrap  bg-[#f9fafb] shadow-md border-[1px] rounded-sm border-slate-200 justify-center items-center'>
                            <Image alt='slide3' width={100} height={100} style={{objectFit:'cover'}} src='/slide3.png' />
                            <figcaption className='w-full pb-[10px] flex justify-center items-center'>
                                <h2 className='font-title2'>کافه</h2>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className='flex cursor-pointer flex-wrap rounded-sm  bg-[#f9fafb] shadow-md border-[1px] border-slate-200 justify-center items-center'>
                            <Image alt='slide4' width={100} height={100} style={{objectFit:'cover'}} src='/slide4.png' />
                            <figcaption className='w-full pb-[10px] flex justify-center items-center'>
                                <h2 className='font-title2'>شیرینی</h2>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className='flex cursor-pointer flex-wrap rounded-sm bg-[#f9fafb] shadow-md border-[1px] border-slate-200 justify-center items-center'>
                            <Image alt='slide5' width={100} height={100} style={{objectFit:'cover'}} src='/slide5.png' />
                            <figcaption className='w-full pb-[10px] flex justify-center items-center'>
                                <h2 className='font-title2'>نانوایی</h2>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className='flex cursor-pointer flex-wrap rounded-sm  bg-[#f9fafb] shadow-md border-[1px] border-slate-200 justify-center items-center'>
                            <Image alt='slide6' width={100} height={100} style={{objectFit:'cover'}} src='/slide6.png' />
                            <figcaption className='w-full pb-[10px] flex justify-center items-center'>
                                <h2 className='font-title2'>میوه</h2>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className='flex cursor-pointer flex-wrap rounded-sm bg-[#f9fafb] shadow-md border-[1px] border-slate-200 justify-center items-center'>
                            <Image alt='slide7' width={100} height={100} style={{objectFit:'cover'}} src='/slide7.png' />
                            <figcaption className='w-full pb-[10px] flex justify-center items-center'>
                                <h2 className='font-title2'>پروتئین</h2>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className='flex flex-wrap rounded-sm  bg-[#f9fafb] shadow-md border-[1px] cursor-pointer border-slate-200 justify-center items-center'>
                            <Image alt='slide8' width={100} height={100} style={{objectFit:'cover'}} src='/slide8.png' />
                            <figcaption className='w-full pb-[10px] flex justify-center items-center'>
                                <h2 className='font-title2'>آبمیوه بستنی</h2>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className='flex cursor-pointer flex-wrap rounded-sm  bg-[#f9fafb] shadow-md border-[1px] border-slate-200 justify-center items-center'>
                            <Image alt='slide9' width={100} height={100} style={{objectFit:'cover'}} src='/slide9.png' />
                            <figcaption className='w-full pb-[10px] flex justify-center items-center'>
                                <h2 className='font-title2'>لبنیات</h2>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className='flex cursor-pointer flex-wrap rounded-sm bg-[#f9fafb] shadow-md border-[1px] border-slate-200 justify-center items-center'>
                            <Image alt='slide10' width={100} height={100} style={{objectFit:'cover'}} src='/slide10.png' />
                            <figcaption className='w-full pb-[10px] flex justify-center items-center'>
                                <h2 className='font-title2'>گل و گیاه</h2>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className='flex cursor-pointer flex-wrap  bg-[#f9fafb] shadow-md border-[1px] rounded-sm border-slate-200 justify-center items-center'>
                            <Image alt='slide11' width={100} height={100} style={{objectFit:'cover'}} src='/slide11.png' />
                            <figcaption className='w-full pb-[10px] flex justify-center items-center'>
                                <h2 className='font-title2'>قهوه و شکلات</h2>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className='flex cursor-pointer flex-wrap rounded-sm  bg-[#f9fafb] shadow-md border-[1px] border-slate-200 justify-center items-center'>
                            <Image alt='slide12' width={100} height={100} style={{objectFit:'cover'}} src='/slide12.png' />
                            <figcaption className='w-full pb-[10px] flex justify-center items-center'>
                                <h2 className='font-title2'>آجیل</h2>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className='flex cursor-pointer flex-wrap rounded-sm  bg-[#f9fafb] shadow-md border-[1px] border-slate-200 justify-center items-center'>
                            <Image alt='slide13' width={100} height={100} style={{objectFit:'cover'}} src='/slide13.png' />
                            <figcaption className='w-full pb-[10px] flex justify-center items-center'>
                                <h2 className='font-title2'>عطاری</h2>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className='flex flex-wrap rounded-sm  bg-[#f9fafb] shadow-md border-[1px] cursor-pointer border-slate-200 justify-center items-center'>
                            <Image alt='slide14' width={100} height={100} style={{objectFit:'cover'}} src='/slide14.png' />
                            <figcaption className='w-full pb-[10px] flex justify-center items-center'>
                                <h2 className='font-title2'>سلامت و زیبایی</h2>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className='flex cursor-pointer flex-wrap rounded-sm  bg-[#f9fafb] shadow-md border-[1px] border-slate-200 justify-center items-center'>
                            <Image alt='slide15' width={100} height={100} style={{objectFit:'cover'}} src='/slide15.png' />
                            <figcaption className='w-full pb-[10px] flex justify-center items-center'>
                                <h2 className='font-title2'>سایر</h2>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                </Swiper>
            </div>
        {/* ////////////// Mobile Show///////////////// */}
            <div className='w-[90%] *:my-[10px] flex lg:hidden flex-wrap justify-center items-center'>
                <Swiper className='h-[25vh]'
                    // install Swiper modules
                    modules={[Pagination, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={2}
                    loop={false}
                    autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                >
                    <SwiperSlide>
                        <figure className='flex rounded-sm bg-[#f9fafb] shadow-md border-[1px] border-slate-200 flex-wrap  justify-center items-center'>
                            <Image alt='slide1-1' width={100} height={100} style={{objectFit:'cover'}} src='/slide1.png' />
                            <figcaption className='w-full text-center pb-[10px] flex justify-center items-center'>
                                <h2 className='font-title2'>رستوران</h2>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className='flex flex-wrap rounded-sm bg-[#f9fafb] shadow-md border-[1px] border-slate-200 justify-center items-center'>
                            <Image alt='slide1-2' width={100} height={100} style={{objectFit:'cover'}} src='/slide2.png' />
                            <figcaption className='w-full text-center pb-[10px] flex justify-center items-center'>
                                <h2 className='font-title2'>سوپرمارکت</h2>
                            </figcaption>
                        </figure></SwiperSlide>
                    <SwiperSlide>
                        <figure className='flex flex-wrap  bg-[#f9fafb] shadow-md border-[1px] rounded-sm border-slate-200 justify-center items-center'>
                            <Image alt='slide1-3' width={100} height={100} style={{objectFit:'cover'}} src='/slide3.png' />
                            <figcaption className='w-full text-center pb-[10px] flex justify-center items-center'>
                                <h2 className='font-title2'>کافه</h2>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className='flex flex-wrap rounded-sm  bg-[#f9fafb] shadow-md border-[1px] border-slate-200 justify-center items-center'>
                            <Image alt='slide1-4' width={100} height={100} style={{objectFit:'cover'}} src='/slide4.png' />
                            <figcaption className='w-full text-center pb-[10px] flex justify-center items-center'>
                                <h2 className='font-title2'>شیرینی</h2>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className='flex flex-wrap rounded-sm bg-[#f9fafb] shadow-md border-[1px] border-slate-200 justify-center items-center'>
                            <Image alt='slide1-5' width={100} height={100} style={{objectFit:'cover'}} src='/slide5.png' />
                            <figcaption className='w-full text-center pb-[10px] flex justify-center items-center'>
                                <h2 className='font-title2'>نانوایی</h2>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className='flex flex-wrap rounded-sm  bg-[#f9fafb] shadow-md border-[1px] border-slate-200 justify-center items-center'>
                            <Image alt='slide1-6' width={100} height={100} style={{objectFit:'cover'}} src='/slide6.png' />
                            <figcaption className='w-full text-center pb-[10px] flex justify-center items-center'>
                                <h2 className='font-title2'>میوه</h2>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className='flex flex-wrap rounded-sm bg-[#f9fafb] shadow-md border-[1px] border-slate-200 justify-center items-center'>
                            <Image alt='slide1-7' width={100} height={100} style={{objectFit:'cover'}} src='/slide7.png' />
                            <figcaption className='w-full text-center pb-[10px] flex justify-center items-center'>
                                <h2 className='font-title2'>پروتئین</h2>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className='flex flex-wrap rounded-sm  bg-[#f9fafb] shadow-md border-[1px] border-slate-200 justify-center items-center'>
                            <Image alt='slide1-8' width={100} height={100} style={{objectFit:'cover'}} src='/slide8.png' />
                            <figcaption className='w-full text-center pb-[10px] flex justify-center items-center'>
                                <h2 className='font-title2'>آبمیوه بستنی</h2>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className='flex flex-wrap rounded-sm  bg-[#f9fafb] shadow-md border-[1px] border-slate-200 justify-center items-center'>
                            <Image alt='slide1-9' width={100} height={100} style={{objectFit:'cover'}} src='/slide9.png' />
                            <figcaption className='w-full text-center pb-[10px] flex justify-center items-center'>
                                <h2 className='font-title2'>لبنیات</h2>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className='flex flex-wrap rounded-sm bg-[#f9fafb] shadow-md border-[1px] border-slate-200 justify-center items-center'>
                            <Image alt='slide1-10' width={100} height={100} style={{objectFit:'cover'}} src='/slide10.png' />
                            <figcaption className='w-full pb-[10px] text-center flex justify-center items-center'>
                                <h2 className='font-title2'>گل و گیاه</h2>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className='flex flex-wrap  bg-[#f9fafb] shadow-md border-[1px] rounded-sm border-slate-200 justify-center items-center'>
                            <Image alt='slide1-11' width={100} height={100} style={{objectFit:'cover'}} src='/slide11.png' />
                            <figcaption className='w-full pb-[10px] text-center flex justify-center items-center'>
                                <h2 className='font-title2'>قهوه و شکلات</h2>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className='flex flex-wrap rounded-sm  bg-[#f9fafb] shadow-md border-[1px] border-slate-200 justify-center items-center'>
                            <Image alt='slide1-12' width={100} height={100} style={{objectFit:'cover'}} src='/slide12.png' />
                            <figcaption className='w-full pb-[10px] text-center flex justify-center items-center'>
                                <h2 className='font-title2'>آجیل</h2>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className='flex flex-wrap rounded-sm  bg-[#f9fafb] shadow-md border-[1px] border-slate-200 justify-center items-center'>
                            <Image alt='slide1-13' width={100} height={100} style={{objectFit:'cover'}} src='/slide13.png' />
                            <figcaption className='w-full pb-[10px] text-center flex justify-center items-center'>
                                <h2 className='font-title2'>عطاری</h2>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className='flex flex-wrap rounded-sm  bg-[#f9fafb] shadow-md border-[1px] border-slate-200 justify-center items-center'>
                            <Image alt='slide1-14' width={100} height={100} style={{objectFit:'cover'}} src='/slide14.png' />
                            <figcaption className='w-full pb-[10px] text-center flex justify-center items-center'>
                                <h2 className='font-title2'>سلامت و زیبایی</h2>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className='flex flex-wrap rounded-sm  bg-[#f9fafb] shadow-md border-[1px] border-slate-200 justify-center items-center'>
                            <Image alt='slide1-15' width={100} height={100} style={{objectFit:'cover'}} src='/slide15.png' />
                            <figcaption className='w-full pb-[10px] text-center flex justify-center items-center'>
                                <h2 className='font-title2'>سایر</h2>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
