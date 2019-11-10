export const increment = (addBy) => {
  return {
    type: 'INCREMENT',
    payload: addBy
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT'
  };
};
