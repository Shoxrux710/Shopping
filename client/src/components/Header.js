import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {ProductShopping} from '../redux/action/ProductAction'
import axios from 'axios'
import Home from './Home'

const Header = () => {

    const dispatch = useDispatch()

    const appProducts = async () => {
        const response = await axios.get("http://localhost:5000/api/productLink")
                              .catch(err => console.log(err))  

                              dispatch(ProductShopping(response.data))

    }

    useEffect(() => {
        appProducts()
    }, [])


    return (
        <div>
            <Home/>
        </div>
    )
}

export default Header
