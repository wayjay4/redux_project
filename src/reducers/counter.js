const counterReducer = (state=0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload.addBy;
    case 'DECREMENT':
      return state - action.payload.subtractBy;
    default:
       return state;
  };
};

export default counterReducer;
