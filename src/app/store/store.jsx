"use client"
import { create } from "zustand"

const useCart = create((set) => ({
    mycart: [],

    addtocart: (persianpro) => set((state) => {
        const cartpersian = state.mycart.find((item) => item?.id == persianpro.id)
        if (cartpersian) {
            alert('این محصول قبلا به سبد خرید اضافه شده است.')
            return state
        }
        else {
            return { mycart: [...state.mycart, persianpro] }
        }
    }),


    pluscart: (foodid) => set((state) => {
        const plusindex = state.mycart.findIndex((item) => item.id == foodid)
        if (plusindex != -1) {
            state.mycart[plusindex].count += 1
            return ({ mycart: [...state.mycart] })
        }
    }),


    minezcart: (foodid) => set((state) => {
        const minezindex = state.mycart.findIndex((item) => item.id == foodid)
        if (state.mycart[minezindex].count > 1) {
            state.mycart[minezindex].count -= 1
            return ({ mycart: [...state.mycart] })
        }
        else {
            return ({ mycart: state.mycart.filter((item) => item.id != foodid) })
        }
    }),


    del: (foodid) => set((state) => {
        return ({ mycart: state.mycart.filter((item) => item.id != foodid) })
    }),

    alldelete: () => set(() => ({
        mycart: [],
    }))

}))
export default useCart
