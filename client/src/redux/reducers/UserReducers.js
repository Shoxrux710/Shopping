import {USER_CART} from '../action/types'

let savedState

if (window.localStorage.getItem('auth')){

    savedState = JSON.parse(window.localStorage.getItem('auth'))

}else{
    
    savedState = null
}


const UserReducers = (state = savedState, action) => {

    switch(action.type){
        case USER_CART:
         return {
             ...state,
              ...action.payload
         }

        default: 
            return state
    }

}

export default UserReducers