function currencyRates(state = [], action) {
  switch (action.type) {
    case 'FETCHING':
      return action.data;
    default:
      return state;
  }
}


export default currencyRates;