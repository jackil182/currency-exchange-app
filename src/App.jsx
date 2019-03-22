import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncData } from './redux/actions/asyncDataActions';
import Loader from 'react-loader-spinner';

import Table from './components/Table/Table';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { rates, propName } = this.props;
    return (
      <div className="App">
        <img src="" alt="" />
        <h2>Rates</h2>

        {rates.length ? (
          <Table data={rates} />
        ) : (
          <Loader type="Grid" color="#62AB36" height={80} width={80} />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rates: state.currencyRates
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetch: () => dispatch(asyncData())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
