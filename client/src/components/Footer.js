import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col lg={3}>
                        <h3>
                            ТОВАРЫ
                        </h3>
                        <ul className="footer_link">
                            <li><Link to="#">Часы</Link></li>
                            <li><Link to="#">Кольца</Link></li>
                            <li><Link to="#">Серьги</Link></li>
                            <li><Link to="#">Браслеты</Link></li>
                            <li><Link to="#">Клатчи</Link></li>
                            <li><Link to="#">Цепочки</Link></li>
                        </ul>
                    </Col>
                    <Col lg={3} xm={6}>
                        <h3>
                            ПОКУПАТЕЛЯМ
                        </h3>
                        <ul>
                            <li><Link to="#">Скидки</Link></li>
                            <li><Link to="#">Новости</Link></li>
                        </ul>
                    </Col>
                    <Col xm={6}>
                        <h3>
                            ПОКУПАТЕЛЯМ
                        </h3>
                        <Link to="#">Ул. Аския, Яккасарайский район, Ташкент, Узбекистан</Link>
                        <div class="tel">
                            <Link to="tel: +998 97 742 54 14">+998 97 742 54 14</Link>
                            <Link to="tel: +998 97 742 54 14">+998 97 742 54 14</Link>
                        </div>
                        <div class="email">
                            <Link to="mailto:totembo@exapmle.com" >totembo@exapmle.com</Link>
                        </div>
                        <div class="footer_icon">
                            <h3>
                                СОЦИАЛЬНЫЕ СЕТИ
                            </h3>
                            <ul>
                                <li><Link to="#"><FaYoutube/></Link></li>
                                <li><Link to="#"><FaInstagram/></Link></li>
                                <li><Link to="#"><FaFacebook/></Link></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Footer
