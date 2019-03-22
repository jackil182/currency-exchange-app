import React from 'react';
import { connect } from 'react-redux';

import { clickedBTN, as } from '../../redux/actions/buttonActions';
import { inputVal } from '../../redux/actions/inputActions';

import TableRow from '../TableRow/TableRow';
import './Table.css';

const Table = ({
  data,
  clickedBTN,
  inputVal,
  selectedRate,
  convertedVal,
  inputValue,
  currencyName,
}) => {
  const uahToUsd = data.find(el => el.ccy === 'USD').sale;

  return (
    <div className="main">
      <table className="table">
        <tbody>
          <tr>
            <th>Currency</th>
            <th>Sell</th>
            <th>Buy</th>
          </tr>
          {data.map(el => (
            <TableRow key={el.ccy} info={el} />
          ))}
        </tbody>
      </table>
      <div className="currency-menu">
        <button
          onClick={e => {
            clickedBTN(e, data, inputValue, uahToUsd);
          }}
          name="USD"
        >
          USD
        </button>
        <button
          onClick={e => {
            clickedBTN(e, data, inputValue, uahToUsd);
          }}
          name="EUR"
        >
          EUR
        </button>
        <button
          onClick={e => {
            clickedBTN(e, data, inputValue, uahToUsd);
          }}
          name="RUR"
        >
          RUR
        </button>
        <button
          onClick={e => {
            clickedBTN(e, data, inputValue, uahToUsd);
          }}
          name="BTC"
        >
          BTC
        </button>
      </div>

      <form action="" onSubmit={e => e.preventDefault()}>
        <input
          onChange={e => inputVal(e.target.value, selectedRate, uahToUsd, currencyName)}
          type="number"
          name="convertedVal"
          id=""
          placeholder={`Enter your amount in ${currencyName}`}
          className="inputValue"
        />
      </form>
      <p>{convertedVal}</p>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    selectedRate: state.selectedRate,
    convertedVal: state.convertedVal,
    inputValue: state.inputValue,
    currencyName: state.currencyName,
    uahToUsd: state.uahToUsd,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clickedBTN: (e, data, inputValue, uahToUsd) =>
      dispatch(clickedBTN(e, data, inputValue, uahToUsd)),
    inputVal: (e, rate, uahToUsd, currencyName) => dispatch(inputVal(e, rate, uahToUsd, currencyName))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
