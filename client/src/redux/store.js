import {createStore, combineReducers} from 'redux'
import ProductReducers from './reducers/ProductReducers'
import UserReducers from './reducers/UserReducers'
import {composeWithDevTools} from 'redux-devtools-extension'


const rootReducers = combineReducers({
    Products: ProductReducers,
    UserCarts: UserReducers
})


const store = createStore(rootReducers, composeWithDevTools())

export default store