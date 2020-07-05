import React from 'react';
import { IonButton } from '@ionic/react';
import { ShoppingCart } from './shared';

function Products(props: ShoppingCart) {
  return <div>
    {['Apple', 'Orange'].map(product =>
      <div key={product}>
        <IonButton size='small' onClick={() => props.buy(product)}>
          Buy {product}
        </IonButton>
      </div>,
    )}
  </div>;
}

export default Products;
