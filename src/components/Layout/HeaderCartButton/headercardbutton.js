import { useContext } from 'react';

import CartIcon from '../../Cart/cartIcon/CartIcon';
import classes from './headercardbutton.module.css';
import CartContext from '../../../store/cart-context';

const HeaderCardButton = (props) => {
  const ctx = useContext(CartContext);

  const numberOfCartItems = ctx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
