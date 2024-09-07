import { Icon } from '@iconify/react';

const CartWidget = ({ quantity }) => {
  return (
   <div className='cart-widget'>
        <span className='pill'>{quantity}</span>
        <Icon className='cart-widget__cart' icon="fa-solid:wine-glass-alt" />
   </div>
  );
}

export default CartWidget;