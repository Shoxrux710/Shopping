import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { userCart } from '../redux/action/UserAction'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Link} from 'react-router-dom'
import axios from 'axios'

const Login = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const Submit = async (e) => {
        e.preventDefault()
        try {

            const user = {
                email,
                password
            }
            const res = await axios.post("http://localhost:5000/user/login", user)

            if (res.data) {
                window.localStorage.setItem('auth', JSON.stringify(res.data))

                dispatch(userCart(res.data))

                history.push('/')

            }
        } catch (err) {
            if (err.response.status === 400){
                toast.error(err.response.data.msg)
              }
        }
    }

    return (
        <div className="login">
            <Container>
                <h1>Login</h1>
                <Row>
                    <Col className="form-auto" lg={4}>
                        <form onSubmit={Submit}>
                            <div className="form-group">
                                <input
                                    type="email"
                                    required
                                    className="form-control"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    required
                                    placeholder="Password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="button">
                                <button type="submit" className="btn btn-success">login</button>
                                <Link to="/register" className="btn btn-secondary">Register</Link>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login
