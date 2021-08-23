import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {ChainShopping} from '../../redux/action/ProductAction'
import axios from 'axios'
import ChainAll from './ChainAll'

const Chain = () => {

    const dispatch = useDispatch()

    const appChain = async () => {
        const response = await axios.get("http://localhost:5000/chain/productLink")
                              .catch(err => console.log(err))  

                              dispatch(ChainShopping(response.data))
    }

    useEffect(() => {
        appChain()
    }, [])


    return (
        <div>
            <ChainAll/>
        </div>
    )
}

export default Chain
