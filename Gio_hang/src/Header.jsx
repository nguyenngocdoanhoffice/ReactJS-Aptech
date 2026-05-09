import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { selectCartCount } from './store/cartSlice'

const Header = () => {
    const count = useSelector(selectCartCount)
    return (
        <header>
            <Container className="site-header">
                <Row>
                    <Col xs={3} className="text-uppercase">
                        Aptech
                    </Col>
                    <Col xs={9}>
                        <nav>
                            <ul className='m-0 p-0 list-none'>
                                <li style={{ display: 'inline', marginRight: 12 }}><Link to="/">Home</Link></li>
                                <li style={{ display: 'inline', marginRight: 12 }}><Link to="/about">About</Link></li>
                                <li style={{ display: 'inline', marginRight: 12 }}><Link to="/contact">Contact</Link></li>
                                <li style={{ display: 'inline', marginRight: 12 }}>Hello Doanh</li>
                                <li style={{ display: 'inline', marginRight: 12 }}>Cart: {count}</li>
                            </ul>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;