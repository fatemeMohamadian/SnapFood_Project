"use client"
import React from 'react'
import useFetchpro from '../Fetchpro/page'
import useCart from '@/app/store/store'

//////////////// نمایش غذا ها ////////////////////
const FoodItem = ({ food, addtocart }) => (
  <div key={food.id} className='lg:w-[49%] w-full shadow-lg *:my-[20px] flex flex-wrap justify-center items-center'>
    <div className='w-full flex justify-evenly flex-wrap items-center'>
      <span className='w-[60%] flex justify-start items-center flex-wrap'>
        <h2 className='font-title3 w-full'>{food.title}</h2>
        <p className='font-bnazanin mt-[5px] text-gray-500 text-[14px] font-bold'>{food.desc}</p>
      </span>
      <span className='w-[30%] flex justify-center items-center'>
        <img className='rounded-lg w-full h-full object-cover' alt={food.title} src={food.pic} />
      </span>
    </div>
    <div className='w-[90%] flex justify-between items-center flex-wrap'>
      <div className='w-[50%] flex justify-start items-center flex-wrap'>
        <p className='w-full font-bnazanin text-slate-600 text-[15px] font-bold'>{food.featurs}</p>
        <span className='font-bnazanin font-bold'>{food.price}</span>
        <span className='font-bnazanin pr-[3px]'>{food.val}</span>
      </div>
      <button onClick={() => addtocart(food)} className='w-[40%] py-[5px] bg-white hover:bg-[#ff00a6] hover:text-white transition-all duration-500 text-[#ff00a6] shadow-md rounded-2xl flex justify-center items-center border-[1px] border-[#f890d4aa] font-title2'>افزودن</button>
    </div>
  </div>
)

export default function Persianfood() {
  const persianfood = useFetchpro('https://66c5adb1134eb8f43495278f.mockapi.io/persianfood')
  const fastFoodItems = useFetchpro('https://66c63c58134eb8f434972511.mockapi.io/fastfood')
  const addtocart = useCart((state) => state.addtocart)

  return (
    <section className='w-full my-[40px] flex justify-evenly items-center flex-wrap'>
      <div className='w-[95%] flex justify-between items-start flex-wrap'>
        <div className='lg:w-[50%] w-full flex justify-between items-center flex-wrap'>
          <div className='w-full flex rounded-md *:my-[5px] bg-[#ff00a6] shadow-md justify-center items-center text-center'>
            <h2 className='font-title3 text-white text-xl'>ایرانی</h2>
          </div>
          {persianfood.map((food) => (
            <FoodItem key={food.id} food={{...food, count: 1}} addtocart={addtocart} />
          ))}
        </div>
        <div className='flex lg:w-[45%] mt-[25px] lg:mt-0 w-full flex-wrap justify-evenly items-center'>
          <div className='w-full flex rounded-md *:my-[5px] bg-[#ff00a6] shadow-md justify-center items-center text-center'>
            <h2 className='font-title3 text-white text-xl'>فست فود</h2>
          </div>
          {fastFoodItems.map((food) => (
            <FoodItem key={food.id} food={{...food, count: 1}} addtocart={addtocart} />
          ))}
        </div>
      </div>
    </section>
  )
}
