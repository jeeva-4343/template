// CartComponent.js

import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../Products/action';

const Products = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <img src={item.Img} alt={item.Title} />
            <h3>{item.Title}</h3>
            <p>{item.Cate}</p>
            <p>Price: ${item.Price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => increaseQuantity(item.id)}>+</button>
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: (itemId) => dispatch(removeFromCart(itemId)),
    increaseQuantity: (itemId) => dispatch(increaseQuantity(itemId)),
    decreaseQuantity: (itemId) => dispatch(decreaseQuantity(itemId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
