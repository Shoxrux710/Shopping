import {USER_CART} from './types'

export const userCart = (items) => {
    return {
        type: USER_CART,
        payload: items
    }
}
