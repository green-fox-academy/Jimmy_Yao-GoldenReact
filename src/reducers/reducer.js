import {
  INCREASE_AMOUNT, DECREASE_AMOUNT,
} from '../action/actions';

function makeChange(count = 0, action) {
  switch (action.type) {
    case INCREASE_AMOUNT:
      return count + action.count;
    case DECREASE_AMOUNT:
      return count > 0 ? count + action.count : 0;
    default:
      return count;
  }
}

export default makeChange;
