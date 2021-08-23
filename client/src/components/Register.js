import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {


    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()



    const Submit = async (e) => {

        try {
            e.preventDefault()

            const user = {
                name,
                surname,
                email,
                password
            }

           const res = await axios.post("http://localhost:5000/user/register", user)

           if (res.data){
            toast.success("Register success")
            history.push('/login')
           }

        } catch (err) {
            if (err.res.status === 400){
                return toast.error(err.response.data.msg)
            }
        }
    }


    return (
        <div className="register">
            <Container>
            <h1>Register</h1>
                <ToastContainer/>
                <Row>
                <Col className="form-auto" lg={4}>
                        <form onSubmit={Submit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    required
                                    placeholder="Name"
                                    className="form-control"
                                   value={name}
                                   onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    required
                                    placeholder="Surname"
                                    className="form-control"
                                   value={surname}
                                   onChange={(e) => setSurname(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    required
                                    placeholder="Email"
                                    className="form-control"
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
                            <button type="submit" className="btn btn-success">register</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Register
