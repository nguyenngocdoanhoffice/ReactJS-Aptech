import { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux'
import { addToCart } from './store/cartSlice'

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch()

    const getProducts = async () => {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        const prds = data.products;
        setProducts(prds);
    };
    useEffect(() => {
        getProducts();
    }, []);
    return (
        <Row className="mt-3">
            {products && products.map((item) => (
                <Col xs={6} sm={6} md={4} lg={3} key={item.id} className="mb-3">
                    <div className="product-card">
                        <span className="fav-badge">❤</span>
                        <div>
                            <img src={item.thumbnail} alt={item.title} className="thumb" />
                        </div>
                        <h6>{item.title}</h6>
                        <div className="price">Price: {item.price.toLocaleString()} VND</div>
                        <Button size="sm" className="btn-add" onClick={() => dispatch(addToCart({ id: item.id, title: item.title, price: item.price, thumbnail: item.thumbnail }))}>
                            Add cart
                        </Button>
                    </div>
                </Col>
            ))}

        </Row>
    );
}
export default ProductList;