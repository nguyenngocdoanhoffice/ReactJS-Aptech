import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const prod = action.payload
            const existing = state.items.find(i => i.id === prod.id)
            if (existing) {
                existing.quantity += 1
            } else {
                state.items.push({ ...prod, quantity: 1 })
            }
        },
        removeFromCart: (state, action) => {
            const id = action.payload
            state.items = state.items.filter(i => i.id !== id)
        },
        incrementQuantity: (state, action) => {
            const id = action.payload
            const item = state.items.find(i => i.id === id)
            if (item) item.quantity += 1
        },
        decrementQuantity: (state, action) => {
            const id = action.payload
            const item = state.items.find(i => i.id === id)
            if (item) {
                item.quantity -= 1
                if (item.quantity <= 0) {
                    state.items = state.items.filter(i => i.id !== id)
                }
            }
        },
        clearCart: (state) => {
            state.items = []
        }
    }
})

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions

export const selectCartItems = (state) => state.cart.items
export const selectCartCount = (state) => state.cart.items.reduce((s, i) => s + i.quantity, 0)
export const selectCartTotal = (state) => state.cart.items.reduce((s, i) => s + (i.price * i.quantity), 0)

export default cartSlice.reducer
