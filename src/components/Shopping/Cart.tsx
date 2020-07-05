import React from 'react';
import { ShoppingCart } from './shared';

function Cart(props: ShoppingCart) {
  let items: Record<string, number> = {};
  for (let product of props.selected) {
    items[product] = (items[product] || 0) + 1;
  }
  return <div className='cart'>
    selected: {Object.entries(items)
    .map(([product, count]) => <div>
      {product} x{count}
    </div>)}
  </div>;
}

export default Cart;
