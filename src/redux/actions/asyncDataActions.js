import axios from 'axios';

const getData = data => ({
  type: 'FETCHING',
  data
})

function fetchData() {
  return axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
}

export const asyncData = () => dispatch => {
  fetchData().then(res => dispatch(getData(res.data)));
}