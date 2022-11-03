import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  const items = useSelector((state) => state.cart.items);

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{items.length}</span>
    </button>
  );
};

export default CartButton;
