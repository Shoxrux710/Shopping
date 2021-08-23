import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {BracelShopping} from '../../redux/action/ProductAction'
import axios from 'axios'
import BracelAll from './BracelAll'

const Bracel = () => {

    const dispatch = useDispatch()

    const appBracel = async () => {
        const response = await axios.get("http://localhost:5000/bracel/productLink")
                              .catch(err => console.log(err))  

                              dispatch(BracelShopping(response.data))
    }

    useEffect(() => {
        appBracel()
    }, [])


    return (
        <div>
            <BracelAll/>
        </div>
    )
}

export default Bracel
