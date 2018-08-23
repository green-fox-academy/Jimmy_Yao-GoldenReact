export const INCREASE_AMOUNT = 'INCREASE_AMOUNT';
export const DECREASE_AMOUNT = 'DECREASE_AMOUNT';

export function increaseAmount() {
  return {
    type: INCREASE_AMOUNT,
    count: 1,
  };
}

export function decreaseAmount() {
  return {
    type: DECREASE_AMOUNT,
    count: -1,
  };
}

export function arrowUp() {
  return {
    type: INCREASE_AMOUNT,
    count: 1,
  };
}
