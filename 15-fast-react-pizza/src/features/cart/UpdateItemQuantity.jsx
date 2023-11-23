import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  const id = pizzaId;

  function handleDecreaseItemQuantity() {
    dispatch(decreaseItemQuantity(id));
  }

  function handleIncreaseItemQuantity() {
    dispatch(increaseItemQuantity(id));
  }

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={handleDecreaseItemQuantity}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={handleIncreaseItemQuantity}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
