import { currencyFormatter } from '../utils/formatting';

export default function CartItem({name, quantity, price}) {
    return (
        <li className="cart-tem">
            <p>{name} - {quantity} * {currencyFormatter.format(price)}</p>
            <div className="cart-item-actions">
                <button>-</button>
                <span>{quantity}</span>
                <button>+</button>
            </div>
        </li>
    )
}