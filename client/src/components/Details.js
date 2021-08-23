import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col} from 'react-bootstrap';
import { Addcart } from '../redux/action/ProductAction'

const Details = () => {

    const { goBack } = useHistory()
    const dispatch = useDispatch()
    const { id } = useParams()
    const { product } = useSelector(state => state.Products)
    const carts = product.filter(product => product._id == id)




    return (
        <div className="details">
            <Container>
                <Row>
                {carts.map(item => {
                    return (
                        <div className="product" key={item._id}>
                            <Col lg={10} className="auto" >
                            <div className="image">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="card">
                                <div className="title">{item.title}</div>
                                <div className="price">${item.price}</div>
                                <p>{item.description}</p>
                                <div className="btn">
                                    <button onClick={goBack} className="btn btn-danger">Go Back</button>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => dispatch(Addcart(item._id))}
                                    >Add</button>
                                  
                                </div>
                            </div>
                            </Col>
                        </div>
                    )
                })}
                </Row>
            </Container>
        </div >
    )
}

export default Details
