export const clickedBTN = (e, data, currVal, uahToUsd) => ({
  type: 'BTNCLICK',
  name: e.target.name,
  data,
  currVal,
  uahToUsd,
})

// const grnInUsd = data.find(el => el.ccy === 'USD').sale