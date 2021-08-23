import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaCamera } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import axios from 'axios'

const Profile = () => {

    const login = useSelector(state => state.UserCarts)

    const [select, setSelect] = useState(null)

    const Handler = (e) => {
        setSelect(e.target.files[0])
    }
    const Upload = () => {

    }


    return (
        <div className="profile">
            <Container>
                <Row>
                <div className="avatar">
                    <img src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png" alt="" />
                    <span>
                        <FaCamera />
                        <h3>Change</h3>
                        <input type="file" name="file" id="file_up" onChange={Handler} />
                    </span>
                </div>
                <div className="body">
                   {login && (
                       <>
                        <p>Name: {login.user.name}</p>
                        <p>Surname: {login.user.surname}</p>
                        <p>Email: {login.user.email}</p>
                        <button
                            onClick={Upload}
                        >upload</button>
                       </>
                   )}
                </div>
                </Row>
            </Container>
        </div>
    )
}

export default Profile
