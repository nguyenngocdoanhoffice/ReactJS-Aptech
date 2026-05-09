import { useSelector, useDispatch } from 'react-redux'
import { selectCartItems, selectCartCount, selectCartTotal, removeFromCart, incrementQuantity, decrementQuantity } from './store/cartSlice'
import { Button } from 'react-bootstrap'

const Cart = () => {
    const items = useSelector(selectCartItems)
    const count = useSelector(selectCartCount)
    const total = useSelector(selectCartTotal)
    const dispatch = useDispatch()

    return (
        <div className="cart-box">
            <div className="cart-title">Total: {count} total items.</div>
            <div className="cart-total">total: {total.toLocaleString()} VND</div>
            <div>
                {items.map(i => (
                    <div key={i.id} className="cart-item">
                        <div className="meta d-flex" style={{ gap: 10 }}>
                            <img src={i.thumbnail} alt={i.title} style={{ width: 60, height: 45, objectFit: 'cover' }} />
                            <div>
                                <div style={{ fontWeight: 700 }}>{i.title}</div>
                                <div>Price: {i.price.toLocaleString()} VND</div>
                                <div>Quantity: {i.quantity}</div>
                            </div>
                        </div>
                        <div>
                            <button className="remove-btn" onClick={() => dispatch(removeFromCart(i.id))}>X</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Cart;