import { currencyFormatter } from '../utils/formatting';

export default function CartItem({
    name, 
    quantity,
    price,
    onIncrease,
    onDecrease }) 
    {
    return (
        <li className="cart-tem">
            <p>{name} - {quantity} * {currencyFormatter.format(price)}</p>
            <div className="cart-item-actions">
                <button onClick={onDecrease}>-</button>
                <span>{quantity}</span>
                <button onClick={onIncrease}>+</button>
            </div>
        </li>
    )
}