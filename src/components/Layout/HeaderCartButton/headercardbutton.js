import CartIcon from '../../Cart/cartIcon/CartIcon';
import classes from './headercardbutton.module.css';
const HeaderCardButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCardButton;
