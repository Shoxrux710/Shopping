import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {ErringShopping} from '../../redux/action/ProductAction'
import axios from 'axios'
import ErringAll from './ErringAll'

const Erring = () => {

    const dispatch = useDispatch()

    const appRings = async () => {
        const response = await axios.get("http://localhost:5000/erring/productLink")
                              .catch(err => console.log(err))  

                              dispatch(ErringShopping(response.data))
    }

    useEffect(() => {
        appRings()
    }, [])


    return (
        <div>
            <ErringAll/>
        </div>
    )
}

export default Erring
