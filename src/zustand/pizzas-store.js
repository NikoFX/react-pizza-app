import { create } from 'zustand'
import { pizza } from '../data'

export const pizzasStore = create(set => ({
    pizzas: [...pizza],
    checkoutList: [],
    addToCheckout: (pizza) => set(state => {
        state.checkoutList.find(item => item?.id === pizza.id) ? null : state.checkoutList.push(pizza)
        return {}
    }),
    emptyCheckoutList: () => set(state => ({ checkoutList: [] })),
    searchPizza: (key) => set(state => {
        key ? state.pizzas = pizza.filter(pizza => pizza.name.toLowerCase().includes(key.toLowerCase())) : state.pizzas = [...pizza]
        return {}
    })
}))