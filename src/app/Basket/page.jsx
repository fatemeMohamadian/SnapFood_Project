"use client"
import './../globals.css'
import React, { lazy, useEffect, useState } from 'react'
import useCart from '../store/store'
import Link from 'next/link'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
export default function Basketcart() {
  const [localCart, setLocalCart] = useState([]);

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#ff00a6'),
    backgroundColor: '#ff00a6',
    '&:hover': {
      backgroundColor: '#d5008b',
    },
  }));
  const persiancart = useCart((state) => state.mycart)
  const pluscart = useCart((state) => state.pluscart)
  const minezcart = useCart((state) => state.minezcart)
  const del = useCart((state) => state.del)
  const alldelete = useCart((state) => state.alldelete)
  

  // useEffect(() => {
  //   // اینجا میای چک میکنی که اگر دیتا نبود یه ارایه خالی بدی که ارور نده
  //   let last = JSON.parse(localStorage.getItem('myfood')) ?? []
     
  //   // ازین مشکل که گذشتی میرسی به اینجا و دوبار تکرار یا ممکنه هر بار که persiancart تغییر کنه اینجا دیتات تکرار شه و میای از some استفاده میکنی

  //   persiancart.forEach((val) => {
  //     // انیجی چک میکنی ببینی تکراری نباشه
  //     const exists = last.some((item) => item.id === val.id)
  //     if (!exists) {
  //       last.push(val)
  //     }
  //   })


  //   localStorage.setItem('myfood', JSON.stringify(last))

  //   setLocalCart(last)
  // }, [persiancart])




  
   
  // useEffect(() => {
  //   // Load cart from localStorage on component mount
  //   const savedCart = localStorage.getItem('persianCart');
  //   if (savedCart) {
  //     setLocalCart([...localCart,JSON.parse(savedCart)]);
  //   }
  // }, []);

  // useEffect(() => {
  //   // Save cart to localStorage whenever it changes
  //   localStorage.setItem('persianCart', JSON.stringify(persiancart));
  //   setLocalCart(persiancart);
  // }, [persiancart]);


  const sumtotal = persiancart.reduce((prevalue, nextvalue) => {
    return prevalue + (nextvalue.price) * (nextvalue.count)
  }, 0)

  const sumsend = persiancart.reduce((prevalue, nextvalue) => {
    return prevalue + nextvalue.send
  }, 0)

  const sumall = persiancart.reduce((prevalue, nextvalue) => {
    return prevalue + (nextvalue.price) * (nextvalue.count) + (nextvalue.send)
  }, 0)

  const result = () => {
    if (persiancart != '') {
      alert('سفارش شما با موفقیت ثبت گردید.')
    }
    else {
      alert('سفارشی موجود نیست!\nسفارش جدید خود را ثبت کنید!')
    }
  }

  const [empty, setEmpty] = useState('')
  useEffect(() => {
    if (persiancart == '') {
      setEmpty('سبد خرید شما خالی است')
    }
    else {
      setEmpty('')
    }
  }, [empty])
  return (
    <section dir='rtl' className='w-full flex justify-center items-center flex-wrap'>
      <div className='w-[90%] flex justify-between items-start flex-wrap'>
        <div className='w-full *:mt-[10px] flex justify-between items-center'>
          <div className='flex w-full justify-start lg:w-[12%] border-b-[5px] border-[#ff00a6] lg:justify-between items-center flex-wrap'>
            <h2 className='font-title3 text-2xl text-[#ff00a6] flex justify-center items-center'>سبد خرید</h2>
            <span className='font-bnazanin font-bold text-xl border mr-[7px] bg-[#ff00a6] text-white rounded-md flex justify-center text-center items-center w-[32px]'>
              <p>{persiancart.length}</p>
            </span>
          </div>
        </div>
        <div className='lg:w-[70%] w-full *:my-[15px] flex flex-wrap justify-start items-center'>
          <div className='w-full bg-white shadow-md border-[1px] border-pink-200 rounded-sm *:my-[5px] flex flex-wrap justify-center lg:justify-start items-center'>
            <span className='lg:w-[70%] w-full flex justify-start items-center'>
              <Link href='Productspages/Menuproduct'>
                <h3 className='font-bnazanin pr-[10px] font-bold text-slate-600'>
                  لیست غذاها
                  <NavigateBeforeIcon />
                </h3>
              </Link>
              <h2 className='font-title2'>سبد خرید شما</h2>
            </span>
            <span onClick={alldelete} className='w-[50%] *:my-[5px] border font-bnazanin font-bold text-xl flex justify-center lg:justify-end items-center'>
              <ColorButton className='lg:w-[50%] w-full' sx={{ padding: '6px' }} variant="contained"><p className='font-title1 text-xl font-bold'>حذف خرید</p></ColorButton>
            </span>
            <p className='w-full pr-[10px] font-title2'>{persiancart.length} محصول</p>
          </div>
          {persiancart?.map((val) => {
            return (
              <div key={val.id} className='w-full rounded-lg shadow-lg *:my-[10px] flex flex-wrap justify-evenly items-center border-[1px] border-[#ff97dbb5]'>
                <div className='w-[95%] flex justify-end items-start'>
                  <span onClick={() => del(val.id)} className='flex text-[#e42b2b] cursor-pointer justify-end items-center'>
                    <DeleteRoundedIcon />
                  </span>
                </div>
                <figure className='w-[150px] h-[150px] bg-[#ff00a6b2] rounded-lg flex justify-center items-center'>
                  <img className='object-cover w-[110px] h-[110px] rounded-xl' src={val.pic} alt='cart1' />
                </figure>
                <div className='lg:w-[50%] w-full flex-wrap flex justify-center text-center lg:text-start lg:justify-start items-center *:w-full'>
                  <h3 className='font-title3 text-xl'>{val.title}</h3>
                  <p className='font-bnazanin mt-[10px] text-gray-600'>{val.featurs}</p>
                  <p className='font-bnazanin text-gray-600'>پیک فروشنده</p>
                  <p className='font-bnazanin text-gray-600'><UpdateIcon className='text-sm' /> دریافت در سریع ترین زمان ممکن</p>
                  <p className='font-bnazanin text-gray-600'>ارسال سریع</p>
                </div>
                <div className='w-full *:my-[20px] justify-start items-center flex'>
                  <span className='flex-wrap w-[50%] lg:w-[17%] flex justify-evenly items-start'>
                    {/* icon - */}
                    <span onClick={() => pluscart(val.id)} className='flex  cursor-pointer justify-center items-center border shadow-md bg-white rounded-[50%] text-[#ff00a6]'>
                      <AddIcon />
                    </span>

                    <p className='font-title2'>{val.count}</p>
                    {/* icon + */}
                    <span onClick={() => minezcart(val.id)} className='flex cursor-pointer justify-center items-center border shadow-md bg-white rounded-[50%] text-[#ff00a6]'>
                      <RemoveIcon />
                    </span>

                  </span>
                  <div className='w-[40%] flex justify-center items-center'>
                    <span className='font-title2'>{val.price}</span>
                    <span className='font-bnazanin pr-[5px]'>{val.val}</span>
                  </div>
                </div>
              </div>
            )
          })}
          <div className='w-[90%] *:my-[15px] flex flex-wrap justify-evenly items-center'>
            <div className='w-full flex justify-center items-center'>
              <h2 className='font-title3'>{empty}</h2>
            </div>
          </div>
        </div>
        <div className='lg:w-[25%] w-full shadow-md rounded-lg flex-wrap flex justify-center items-center border'>
          <div className='w-[90%] *:my-[10px] flex justify-center items-center flex-wrap'>
            <span className='w-full *:text-gray-500 *:font-title2 flex justify-between items-center'>
              <h2>مجموع</h2>
              <h2>{sumtotal} تومان</h2>
            </span>
            <span className='w-full *:text-gray-500 *:font-title2 flex justify-between items-center'>
              <h2>هزینه ارسال</h2>
              <h2>{sumsend} تومان</h2>
            </span>
            <span className='w-full flex justify-between items-center *:font-title2'>
              <h2>قابل پرداخت</h2>
              <h2>{sumall} تومان</h2>
            </span>
            <span className='w-full flex justify-center items-center'>
              <textarea rows='4' placeholder='توضیحات سفارش.....' className='shadow-sm font-title2 w-[90%] focus:border-[3px] focus:border-[#ff00a6] outline-none placeholder:font-title2 placeholder:pr-[10px] placeholder:pt-[10px] placeholder:text-gray-500 border-[1px] rounded-md' name="txt" id=""></textarea>
            </span>
            <span className='w-full flex justify-center items-center'>
              <ColorButton onClick={result} className='w-[90%]' sx={{ padding: '6px' }} variant="contained"><p className='font-title1 text-xl font-bold'>تکمیل سفارش</p></ColorButton>
            </span>
          </div>
        </div>
      </div>
    </section >
  )
}
