import React from 'react';
import Cart from './Cart';

const Clubfactory = ({num,name,price,image,rating}) => {
  return (
    <div className="rub">
      <img src={image} alt=''/>
      <h4>NO. : {num}</h4>
      <p>{name}</p>
      <h3>Price : ${price}</h3>
      <Cart/>
      <h4>Rating : {rating}</h4>
    </div>

  )
}

export default Clubfactory;