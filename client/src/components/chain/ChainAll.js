import React, {useState} from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux'
import { Addcart } from '../../redux/action/ProductAction'
import { toast } from 'react-toastify'
import Swipers from '../Swipers';
import Footer from '../Footer'

const ChainAll = () => {

    const [showed, setShowed] = useState(null)
    const [show, setShow] = useState(false)



    const dispatch = useDispatch()
    const { chain } = useSelector(state => state.Products)
    const login = useSelector(state => state.UserCarts)

    
    const addProducts = (item) => {
        if (login) {
            dispatch(Addcart(item))
        }
        else {
            toast.error("Please register")
        }
    }

    const openModal = (items) => {
        setShowed(items)
        setShow(true)
    }
    const closeModal = () => {
        setShowed(null)
        setShow(false)
    }

    console.log("rings", chain);

    return (
        <div className="home">
            <Container>
                <Swipers/>
                <Row>
                    {chain.length === 0 ? (
                        <div className="loading">Loading...</div>
                    ) :
                        <>
                            {
                                chain.map(item => {
                                    return (
                                        <Col className="auto" lg={4} md={6}>
                                            <div className="carts">
                                                <button className="btn btn-secondary">50%</button>
                                                <div>
                                                    <FaHeart className="like" />
                                                </div>
                                                <FaShoppingCart className="cart"
                                                    onClick={() => dispatch(Addcart(item._id))}
                                                />
                                                 <p className="btn btn-success"
                                                    onClick={() => openModal(item)}
                                                >view</p>
                                                <img src={item.image} alt="" />
                                                <div className="body">
                                                    <p className="meta">{item.title}</p>
                                                    <p className="price">${item.price}</p>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </>
                    }
                </Row>
            </Container>
            {showed && (
                <Modal show={show} onHide={closeModal} size="lg">
                    <Modal.Header>
                        <Button variant="primary"
                            onClick={() => addProducts(showed._id)}
                        >
                            +
                        </Button>
                        <Button variant="secondary" onClick={closeModal}>
                            close
                        </Button>
                    </Modal.Header>
                    <img src={showed.image} alt="" style={{
                        height: "320px",
                        width: "60%",
                        margin: "auto",
                        padding: "10px 0"
                    }} />
                    <Modal.Footer>
                        <p className="btn btn-secondary">
                            price: ${showed.price}
                        </p>
                        <p className="btn btn-secondary">
                            {showed.title}
                        </p>
                    </Modal.Footer>
                </Modal>
            )}
            <Footer />
        </div>
    )
}

export default ChainAll
