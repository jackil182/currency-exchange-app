import { combineReducers } from 'redux';

import currencyRates from './currencyRatesReducer';
import selectedRate from './buttonReducer';
import inputValue from './inputReducer'
import convertedVal from './convertedValReducer';
import currencyName from './currencyNameReducer';

const rootReducer = combineReducers({
  currencyRates,
  selectedRate,
  inputValue,
  convertedVal,
  currencyName,
});

export default rootReducer;
