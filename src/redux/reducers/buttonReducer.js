function selctedRate(state = 1, action) {
  // console.log(action);
  switch (action.type) {
    case 'BTNCLICK':
      const rate =
        action.name === 'BTC'
          ? action.data.find(el => el.ccy === action.name).sale *
            action.uahToUsd
          : action.data.find(el => el.ccy === action.name).sale;

      return rate;
    default:
      return state;
  }
}

export default selctedRate;
