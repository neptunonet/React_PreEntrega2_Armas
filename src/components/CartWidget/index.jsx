import { Icon } from '@iconify/react';
import Pill from '../Pill';

const CartWidget = ({quantity}) => {
  return (
    <div className='cart-widget'>
      <Pill quantity={quantity} />
      <Icon className='cart-widget__cart' icon="fa-solid:wine-glass-alt" />
    </div>
  );
};

export default CartWidget;