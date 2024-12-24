import React from "react";
import "../styles/Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, toggleCart, removeFromCart }) => {
  const totalPrice = cart.reduce((total, product) => total + +product.price, 0);

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <button className="close-btn" onClick={toggleCart}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h2>Ваша корзина</h2>
        {cart.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Цена: {product.price}тг.</p>
                <button onClick={() => removeFromCart(product.id)}>
                  Удалить
                </button>
              </li>
            ))}
          </ul>
        )}
        <h3>Общая стоимость: {totalPrice} тг</h3>
      </div>
    </div>
  );
};

export default Cart;
