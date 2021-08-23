import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap';
import { FaPlus, FaMinus, FaTrashAlt } from 'react-icons/fa';
import { QtycartAdd, QtycartRemove, Addremove } from '../redux/action/ProductAction'
import Fade from 'react-reveal/Fade'
import currencyFormatter from 'currency-formatter'
import axios from 'axios'

const Cart = () => {

    const dispatch = useDispatch()

    const [show, setShow] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")

    const { cart } = useSelector(state => state.Products)

    console.log(cart);


    const ress = cart.reduce((prev, items) => {
        return prev + items.price * items.qty

    }, 0)

    const Submit = (e) => {

        e.preventDefault()

        const order = {
            name: name,
            email: email,
            address: address,
            total: currencyFormatter.format(ress, { code: 'USD' })
        }

        axios.post("http://localhost:5000/cart/user", order)
            .then(data => console.log(data))
            .catch(err => console.log(err))

        window.location = "/"
        setName("")
        setEmail("")
        setAddress("")

    }

    return (
        <div className="cart">
            <Container>
                <Row>
                    {cart.length === 0 ? (
                        <div className="been">Nothings Product</div>
                    ) :
                        <>
                          {cart.map(item => {
                                return (
                                    <Col lg={7} md={9} >
                                        <div className="carts">
                                        <img src={item.image} alt="" />
                                                <div className="title">{item.title}</div>
                                                <div className="price">${item.price}</div>

                                            <div className="number">
                                                <FaMinus className="minus" onClick={() => dispatch(QtycartRemove(item._id, item.qty))} />
                                                <span>{item.qty}</span>
                                                <FaPlus className="plus" onClick={() => dispatch(QtycartAdd(item._id, item.qty))} />
                                            </div>
                                            <div className="trash">
                                                <FaTrashAlt onClick={() => dispatch(Addremove(item._id))} />
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })}
                            <Col lg={4} md={3}>
                                <div className="productsummary">
                                    <div className="total"><span>Total:  </span>${ress}.00</div>
                                    <button className="btn btn-warning" onClick={() => setShow(true)}>Proceed</button>
                                </div>
                                {
                                    show && (
                                        <Fade top cascade>
                                            <div className="show-cart">
                                                <form onSubmit={Submit}>
                                                    <div className="form-container">
                                                        <div>
                                                            <input
                                                                name="name"
                                                                type="text"
                                                                required
                                                                placeholder="Name"
                                                                onChange={(e) => setName(e.target.value)}
                                                            />
                                                        </div>
                                                        <div>
                                                            <input
                                                                name="email"
                                                                type="email"
                                                                required
                                                                placeholder="Email"
                                                                onChange={(e) => setEmail(e.target.value)}
                                                            />
                                                        </div>
                                                        <div>
                                                            <input
                                                                name="address"
                                                                type="text"
                                                                required
                                                                placeholder="Address"
                                                                onChange={(e) => setAddress(e.target.value)}
                                                            />
                                                        </div>
                                                        <button
                                                            className="btn btn-success"
                                                            type="submit"
                                                        >Checkout</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </Fade>
                                    )
                                }
                            </Col>
                        </>}
                </Row>
            </Container>
        </div>
    )
}

export default Cart
