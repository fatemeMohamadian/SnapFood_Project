"use client"
import React from 'react'
import Image from 'next/image'
import Grid from '@mui/material/Grid'
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
export default function Firstsec1() {
  return (
    <>
      <div className='w-[90%] my-[30px] flex justify-center text-center lg:text-start lg:justify-start items-center'>
        <h2 className='font-title2 font-semibold text-lg text-slate-700'>دسته بندی ها</h2>
      </div>
      <div className='w-[95%] mt-[10px] flex flex-wrap justify-center items-center'>
        <Grid className='*:my-[15px]  *:rounded-sm' container sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} xs={12} md={6} lg={2}>
            <figure className='flex cursor-pointer w-[90%] overflow-hidden rounded-2xl  border-[3px] shadow-xl border-white relative justify-center items-center'>
              <Image alt='1' width={335} height={335} className='rounded-2xl' style={{ width: '100%', objectFit: 'cover' }} src='/food1.jpg' />
              <figcaption className='absolute cursor-pointer w-[42%] group flex justify-start items-center rounded-tl-xl *:my-[6px] bg-white bottom-0 right-0'>
                <h1 className='px-[5px] font-title3'>ایرانی</h1><NavigateBeforeRoundedIcon className='transition-all duration-500 group-hover:translate-x-[-3px]' style={{ color: 'rgb(255, 0, 166)' }} />
              </figcaption>
            </figure>
          </Grid>
          <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} xs={12} md={6} lg={2}>
            <figure className='w-[90%] cursor-pointer relative overflow-hidden rounded-2xl  border-[3px] shadow-xl border-white flex flex-wrap justify-center items-center'>
              <Image alt='2' width={335} height={335} className='rounded-2xl' style={{ width: '100%', objectFit: 'cover' }} src='/food2.jpg' />
              <figcaption className='absolute cursor-pointer w-[42%] lg:w-[55%] group flex justify-start items-center rounded-tl-xl *:my-[6px] bg-white bottom-0 right-0'>
                <h1 className='px-[5px] font-title3'>فست فود</h1><NavigateBeforeRoundedIcon className='transition-all duration-500 group-hover:translate-x-[-3px]' style={{ color: 'rgb(255, 0, 166)' }} />
              </figcaption>
            </figure>

          </Grid>
          <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} xs={12} md={6} lg={2}>
            <figure className='relative cursor-pointer w-[90%] overflow-hidden rounded-2xl  border-[3px] shadow-xl border-white flex justify-center items-center'>
              <Image alt='3' width={335} height={335} className='rounded-2xl' style={{ width: '100%', objectFit: 'cover' }} src='/food3.jpg' />
              <figcaption className='absolute cursor-pointer w-[35%] lg:w-[42%] group flex justify-start items-center rounded-tl-xl *:my-[6px] bg-white bottom-0 right-0'>
                <h1 className='px-[5px] font-title3'>کباب</h1><NavigateBeforeRoundedIcon className='transition-all duration-500 group-hover:translate-x-[-3px]' style={{ color: 'rgb(255, 0, 166)' }} />
              </figcaption>
            </figure>
          </Grid>
          <Grid  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} xs={12} md={6} lg={2}>
            <figure className='relative w-[90%] overflow-hidden rounded-2xl  border-[3px] cursor-pointer shadow-xl border-white flex justify-center items-center'>
              <Image alt='4' width={335} height={335} className='rounded-2xl' style={{ width: '100%', objectFit: 'cover' }} src='/food4.jpg' />
              <figcaption className='absolute cursor-pointer w-[35%] lg:w-[42%] group flex justify-start items-center rounded-tl-xl *:my-[6px] bg-white bottom-0 right-0'>
                <h1 className='px-[5px] font-title3'>پیتزا</h1><NavigateBeforeRoundedIcon className='transition-all duration-500 group-hover:translate-x-[-3px]' style={{ color: 'rgb(255, 0, 166)' }} />
              </figcaption>
            </figure>
          </Grid>
          <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} xs={12} md={6} lg={2}>
            <figure className='relative w-[90%] overflow-hidden rounded-2xl  border-[3px] cursor-pointer shadow-xl border-white flex justify-center items-center'>
              <Image alt='5' width={335} height={335} className='rounded-2xl' style={{ width: '100%', objectFit: 'cover' }} src='/food5.jpg' />
              <figcaption className='absolute cursor-pointer w-[35%] lg:w-[42%] group flex justify-start items-center rounded-tl-xl *:my-[6px] bg-white bottom-0 right-0'>
                <h1 className='px-[5px] font-title3'>برگر</h1><NavigateBeforeRoundedIcon className='transition-all duration-500 group-hover:translate-x-[-3px]' style={{ color: 'rgb(255, 0, 166)' }} />
              </figcaption>
            </figure>
          </Grid>
          <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} xs={12} md={6} lg={2}>
            <figure className='relative w-[90%] cursor-pointer overflow-hidden rounded-2xl  border-[3px] shadow-xl border-white flex justify-center items-center'>
              <Image alt='6' width={335} height={335} className='rounded-2xl' style={{ width: '100%', objectFit: 'cover' }} src='/food6.jpg' />
              <figcaption className='absolute cursor-pointer w-[42%] lg:w-[52%] group flex justify-start items-center rounded-tl-xl *:my-[6px] bg-white bottom-0 right-0'>
                <h1 className='px-[5px] font-title3'>ساندویچ</h1><NavigateBeforeRoundedIcon className='transition-all duration-500 group-hover:translate-x-[-3px]' style={{ color: 'rgb(255, 0, 166)' }} />
              </figcaption>
            </figure>
          </Grid>
          <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} xs={12} md={6} lg={2}>
            <figure className='relative cursor-pointer w-[90%] overflow-hidden rounded-2xl  border-[3px] shadow-xl border-white flex justify-center items-center'>
              <Image alt='7' width={335} height={335} className='rounded-2xl' style={{ width: '100%', objectFit: 'cover' }} src='/food7.jpg' />
              <figcaption className='absolute cursor-pointer w-[40%] lg:w-[52%] group flex justify-start items-center rounded-tl-xl *:my-[6px] bg-white bottom-0 right-0'>
                <h1 className='px-[5px] font-title3'>سوخاری</h1><NavigateBeforeRoundedIcon className='transition-all duration-500 group-hover:translate-x-[-3px]' style={{ color: 'rgb(255, 0, 166)' }} />
              </figcaption>
            </figure>
          </Grid>
          <Grid  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} xs={12} md={6} lg={2}>
            <figure className='relative cursor-pointer w-[90%] overflow-hidden rounded-2xl  border-[3px] shadow-xl border-white flex justify-center items-center'>
              <Image alt='8' width={335} height={335} className='rounded-2xl' style={{ width: '100%', objectFit: 'cover' }} src='/food8.jpg' />
              <figcaption className='absolute cursor-pointer w-[35%] lg:w-[42%] group flex justify-start items-center rounded-tl-xl *:my-[6px] bg-white bottom-0 right-0'>
                <h1 className='px-[5px] font-title3'>پاستا</h1><NavigateBeforeRoundedIcon className='transition-all duration-500 group-hover:translate-x-[-3px]' style={{ color: 'rgb(255, 0, 166)' }} />
              </figcaption>
            </figure>
          </Grid>
          <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} xs={12} md={6} lg={2}>
            <figure className='relative cursor-pointer w-[90%] overflow-hidden rounded-2xl  border-[3px] shadow-xl border-white flex justify-center items-center'>
              <Image alt='9' width={335} height={335} className='rounded-2xl' style={{ width: '100%', objectFit: 'cover' }} src='/food9.jpg' />
              <figcaption className='absolute cursor-pointer w-[35%] lg:w-[42%] group flex justify-start items-center rounded-tl-xl *:my-[6px] bg-white bottom-0 right-0'>
                <h1 className='px-[5px] font-title3'>سالاد</h1><NavigateBeforeRoundedIcon className='transition-all duration-500 group-hover:translate-x-[-3px]' style={{ color: 'rgb(255, 0, 166)' }} />
              </figcaption>
            </figure>
          </Grid>
          <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} xs={12} md={6} lg={2}>
            <figure className='relative cursor-pointer w-[90%] overflow-hidden rounded-2xl  border-[3px] shadow-xl border-white flex justify-center items-center'>
              <Image alt='10' width={335} height={335} className='rounded-2xl' style={{ width: '100%', objectFit: 'cover' }} src='/food10.jpg' />
              <figcaption className='absolute cursor-pointer w-[35%] lg:w-[45%] group flex justify-start items-center rounded-tl-xl *:my-[6px] bg-white bottom-0 right-0'>
                <h1 className='px-[5px] font-title3'>دریایی</h1><NavigateBeforeRoundedIcon className='transition-all duration-500 group-hover:translate-x-[-3px]' style={{ color: 'rgb(255, 0, 166)' }} />
              </figcaption>
            </figure>
          </Grid>
          <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} xs={12} md={6} lg={2}>
            <figure className='relative cursor-pointer w-[90%] overflow-hidden rounded-2xl  border-[3px] shadow-xl border-white flex justify-center items-center'>
              <Image alt='11' width={335} height={335} className='rounded-2xl' style={{ width: '100%', objectFit: 'cover' }} src='/food11.jpg' />
              <figcaption className='absolute cursor-pointer w-[40%] lg:w-[55%] group flex justify-start items-center rounded-tl-xl *:my-[6px] bg-white bottom-0 right-0'>
                <h1 className='px-[5px] font-title3'>بین الملل</h1><NavigateBeforeRoundedIcon className='transition-all duration-500 group-hover:translate-x-[-3px]' style={{ color: 'rgb(255, 0, 166)' }} />
              </figcaption>
            </figure>
          </Grid>
          <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} xs={12} md={6} lg={2}>
            <figure className='relative cursor-pointer w-[90%] overflow-hidden rounded-2xl  border-[3px] shadow-xl border-white flex justify-center items-center'>
              <Image alt='12' width={335} height={335} className='rounded-2xl' style={{ width: '100%', objectFit: 'cover' }} src='/food12.jpg' />
              <figcaption className='absolute cursor-pointer w-[35%] lg:w-[45%] group flex justify-start items-center rounded-tl-xl *:my-[6px] bg-white bottom-0 right-0'>
                <h1 className='px-[5px] font-title3'>گیلانی</h1><NavigateBeforeRoundedIcon className='transition-all duration-500 group-hover:translate-x-[-3px]' style={{ color: 'rgb(255, 0, 166)' }} />
              </figcaption>
            </figure>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
