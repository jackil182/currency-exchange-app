function inputValue(state = 0, action) {
  // console.log(action)
  switch (action.type) {
    case 'INPUT':
      return action.value;
    default:
      return state;
  }
}


export default inputValue;