const counterReducer = (state=0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload;
      break;
    case 'DECREMENT':
      return state - 1;
      break;
    default:
       return state;
  };
};

export default counterReducer;
