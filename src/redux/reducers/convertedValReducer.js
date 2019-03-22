function convertedVal(state = '', action) {
  switch (action.type) {
    case 'INPUT':
      return action.value * action.selectedRate;
    case 'BTNCLICK':
      const rate =
        action.name === 'BTC'
          ? action.data.find(x => x.ccy === action.name).sale * action.uahToUsd
          : action.data.find(x => x.ccy === action.name).sale;
    return action.currVal * rate;
    default:
      return state;
  }
}

export default convertedVal;
