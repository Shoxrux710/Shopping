import React, {useState} from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaUser, FaCaretDown, FaBars, FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux'
// import Avatar from 'react-avatar'

const Navbar = () => {

    const [show, setShow] = useState(false)


    const { cart } = useSelector(state => state.Products)
    const login = useSelector(state => state.UserCarts)



    const num = cart.reduce((prev, item) => {

        return prev + item.qty

    }, 0)


    // const { name } = login.user
    
    const userLink = () => {
        return <li className="drop-nav">
             <Link to="/">
             <img src={login.user.avatar} alt="" /> {login.user.name} <FaCaretDown/>
             </Link>
             <ul className="dropdown">
                 <li><Link to="/profile">Profile</Link></li>
                 <li><Link to="/register">Logout</Link></li>
             </ul>
        </li>
    }




    return (
        <div className="navbars">
            <Container>
                <div className="navbar1">
                    <Link className="brand" to="/">TOTEMBO</Link>
                    <div className="numbers"><Link to="/cart"><FaShoppingCart className="cart" /><span>{num}</span></Link></div>
                </div>
                <div className="navbar">
                    <FaBars className="bars" onClick={() => setShow(true)} />
                    <ul className={show ? 'link active': 'link'}>
                        <li><FaTimes className="times" onClick={() => setShow(false)} /></li>
                        <li><Link to="/" className="one">Часы</Link></li>
                        <li><Link to="/ring">Кольца</Link></li>
                        <li><Link to="/erring">Серьги</Link></li>
                        <li><Link to="/bracel">Браслеты</Link></li>
                        <li><Link to="/chain">Цепочки</Link></li>
                    </ul>
                    <ul className="icon">                
                        {login ?
                            userLink()
                            :
                            <li><Link to="/login" className="users" ><FaUser className="user" />sign in</Link></li>}
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default Navbar
