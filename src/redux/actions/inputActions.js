import {clickedBTN} from './buttonActions';

export const inputVal = (text, selectedRate, uahToUsd, currencyName) => ({
  type: 'INPUT',
  value: text,
  selectedRate,
  uahToUsd,
  currencyName,
})

// const changeRate = new Promise((res, rej) => {
//   clickedBTN();
// })