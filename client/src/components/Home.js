import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Addcart } from '../redux/action/ProductAction'
import Footer from './Footer'
import Swipers from './Swipers'
import { toast } from 'react-toastify'
// import Fade from 'react-reveal/Fade'
// import Modal from 'react-modal'
// import Zoom from 'react-reveal/Zoom'
// import image from '../images/image-10.png'
// import images from '../images/image-3.png'

const Home = () => {

    const dispatch = useDispatch()
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("")
    const [showed, setShowed] = useState(null)
    const [show, setShow] = useState(false)

    const { product } = useSelector(state => state.Products)
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


    const sortFilter = (e) => {

        const sorting = e.target.value

        product.sort((a, b) => {
            if (sorting === "all") {
                return a._id > b._id ? 1 : -1
            }
            if (sorting === "lowest") {
                return a.price > b.price ? 1 : -1
            }
            if (sorting === "highest") {
                return a.price > b.price ? -1 : 1
            }
        })
        setSort(sorting)

    }



    return (
        <div className="home">
            <Container>
                <div className="sorting">
                    <input type="text" placeholder="Search..." onChange={(e => setSearch(e.target.value))} />
                    <select value={sort} className="form-select" onChange={sortFilter} >
                        <option value="all">Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
                <Swipers/>
                <Row>
                    {product.length === 0 ? (
                        <div className="loading">Loading...</div>
                    ) :
                        <>
                            {
                                product.filter(val => {
                                    if (search === "") {
                                        return val
                                    }
                                    else if (val.title.toLowerCase().includes(search.toLowerCase())) {
                                        return val
                                    }
                                }).map(item => {
                                    return (
                                        <Col className="auto" lg={4} md={6}>
                                            <div className="carts">
                                                <button className="btn btn-secondary">50%</button>
                                                <div>
                                                    <FaHeart className="like" />
                                                </div>
                                                <FaShoppingCart className="cart"
                                                    onClick={() => addProducts(item._id)}
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

export default Home