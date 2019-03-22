function currencyName(state = 'UAH', action) {
  switch (action.type) {
    case 'BTNCLICK':
      return action.name;
    default:
      return state;
  }
}

export default currencyName;
