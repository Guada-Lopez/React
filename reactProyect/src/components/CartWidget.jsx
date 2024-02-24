import Cart from "../assets/Cart.svg"

const CartWidget = () => {
    return (
        <div className="text-white">
            <img src={Cart} alt="Cart" />
            <span>(10)</span>
        </div>
    );
}; 

export default CartWidget;

