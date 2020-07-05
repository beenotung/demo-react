import React, { useState } from 'react';
import Products from './Products';
import Cart from './Cart';
import './Shopping.css';

function Shopping() {
  const [selected, setSelected] = useState<string[]>([]);

  function buy(product: string) {
    console.log('buy', product);
    setSelected([...selected, product]);
  }

  return <div className='App-Shopping'>
    <Products selected={selected} buy={buy} />
    <Cart selected={selected} buy={buy} />
  </div>;
}

export default Shopping;
