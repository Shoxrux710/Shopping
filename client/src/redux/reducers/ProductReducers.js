import {ADD_TO_CART, REMOVE_TO_CART, APP_PRODUCT,
     REMOVE_CART, ADD_CART, APP_PRODUCT_RING, APP_PRODUCT_ERRING, 
     APP_PRODUCT_BRACEL, APP_PRODUCT_CHAIN} from '../action/types'

const initState = {
    product: [],
    ring: [],
    erring: [],
    bracel: [],
    chain: [],
    cart: []
}


const ProductReducers = (state = initState, action) => {

    switch(action.type){
        case APP_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case APP_PRODUCT_RING:
            return {
                ...state,
                product: action.payload,
                ring: action.payload
            }
        case APP_PRODUCT_ERRING:
            return {
                ...state,
                product: action.payload,
                erring: action.payload
            }
        case APP_PRODUCT_BRACEL:
            return {
                ...state,
                product: action.payload,
                bracel: action.payload
            }
        case APP_PRODUCT_CHAIN:
            return {
                ...state,
                product: action.payload,
                chain: action.payload
            }

        case ADD_TO_CART:

        const item = state.product.find(prods => prods._id === action.payload.id)
        const Cart = state.cart.find(item => item._id === action.payload.id ? true : false)

        return {
            ...state,

            cart: Cart ? state.cart.map(item => item._id === action.payload.id ? 
                {...item, qty: item.qty + 1}: item ): 
                [...state.cart, {...item, qty: 1}]
        }

        case ADD_CART:

        return {
            ...state,
            cart: state.cart.map(item => item._id === action.payload.id ? 
                {...item, qty: action.payload.qty  + 1}: item)
        }

        case REMOVE_TO_CART:

         return {
             ...state,
             cart: state.cart.filter(item => item._id !== action.payload.id)
         }

        case REMOVE_CART:

        return {
            ...state,
            cart: state.cart.map(item => item._id === action.payload.id ? 
                {...item, qty: action.payload.qty > 1 ? action.payload.qty -1 : action.payload.id}: item)
        }

        default: 
            return state
    }
}

export default ProductReducers