import React from 'react';

import './TableRow.css';

const TableRow = ({info}) => {
  return (
    <tr className='row'>
      <td>{info.ccy}</td>
      <td>{info.buy}</td>
      <td>{info.sale}</td>
    </tr>
  );
};

export default TableRow;