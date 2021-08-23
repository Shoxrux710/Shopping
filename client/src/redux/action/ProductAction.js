import {ADD_TO_CART, REMOVE_TO_CART, APP_PRODUCT,
     REMOVE_CART, ADD_CART, APP_PRODUCT_RING, APP_PRODUCT_ERRING,
      APP_PRODUCT_BRACEL, APP_PRODUCT_CHAIN} from './types'


export const ProductShopping = (product) => {
    return {
        type: APP_PRODUCT,
        payload: product
    }
}
export const RingShopping = (product) => {
    return {
        type: APP_PRODUCT_RING,
        payload: product
    }
}
export const ErringShopping = (product) => {
    return {
        type: APP_PRODUCT_ERRING,
        payload: product
    }
}
export const BracelShopping = (product) => {
    return {
        type: APP_PRODUCT_BRACEL,
        payload: product
    }
}
export const ChainShopping = (product) => {
    return {
        type: APP_PRODUCT_CHAIN,
        payload: product
    }
}

export const Addcart = (item) => {

    return {
        type: ADD_TO_CART,
        payload: {
            id: item
        }
    }
}
export const Addremove = (item) => {

    return {
        type: REMOVE_TO_CART,
        payload: {
            id: item
        }
    }
}
export const QtycartAdd = (item, value) => {

    return {
        type: ADD_CART,
        payload: {
            id: item,
            qty: value
        }
    }
}
export const QtycartRemove = (item, value) => {

    return {
        type: REMOVE_CART,
        payload: {
            id: item,
            qty: value
        }
    }
}