import { Fragment } from 'react';

import mealsImage from '../../../assets/meals.jpg';
import classes from './header.module.css';
import HeaderCardButton from '../HeaderCartButton/headercardbutton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton onClick = {props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img
          src={mealsImage}
          alt='A table full of delicious food!'
        />
      </div>
    </Fragment>
  );
};

export default Header;
