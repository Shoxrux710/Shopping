import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {RingShopping} from '../../redux/action/ProductAction'
import axios from 'axios'
import RingAll from './RingAll'

const Ring = () => {

    const dispatch = useDispatch()

    const appRings = async () => {
        const response = await axios.get("http://localhost:5000/ring/productLink")
                              .catch(err => console.log(err))  

                              dispatch(RingShopping(response.data))

    }

    useEffect(() => {
        appRings()
    }, [])


    return (
        <div>
            <RingAll/>
        </div>
    )
}

export default Ring
