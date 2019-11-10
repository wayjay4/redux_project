export const increment = (addBy) => {
  return {
    type: 'INCREMENT',
    payload: addBy
  };
};

export const decrement = (subtractBy) => {
  return {
    type: 'DECREMENT',
    payload: subtractBy
  };
};
