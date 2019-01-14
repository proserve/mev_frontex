import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-svg-inline';

import searchIcon from '../../static/icons/search.svg';
import sortDown from '../../static/icons/sort-down.svg';
import sortUp from '../../static/icons/sort-up.svg';
import './MEVTable.scss';
import { HEADERS, sort, search } from '../../common/utils';


export default class MEVTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: props.transactions,
      filter: '',
      sortKey: '',
      direction: '',
    };
    this.onChangeSearch = this.onChangeSearch.bind(this);
  }

  onChangeSearch(e) {
    const { transactions } = this.props;
    const filter = e.target.value;
    this.setState({ transactions: search(filter, transactions), filter });
  }

  onSort(sortKey) {
    const { transactions, direction } = this.state;
    const newDirection = direction === 'ASC' ? 'DESC' : 'ASC';
    const newTrans = sort(transactions, newDirection, sortKey);
    this.setState({ transactions: newTrans, direction: newDirection, sortKey });
  }


  render() {
    const {
      transactions, filter, sortKey, direction,
    } = this.state;
    return (
      <div className="trans-list">
        <div className="header">
          <h2>Transactions</h2>
          <div className="search-form">
            <SVG svg={searchIcon} />
            <input type="search" placeholder="Search" value={filter} onChange={this.onChangeSearch} />
          </div>
        </div>
        <table>
          <thead>
            <tr className="head">
              {HEADERS.map(({ value, label }) => (
                <th key={value} onClick={() => this.onSort(value)}>
                  {label}
                  {sortKey === value ? <SVG svg={direction === 'ASC' ? sortUp : sortDown} /> : null}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => (
              <Fragment key={transaction.referenceNo}>
                <tr className="spacer" />
                <tr>
                  {HEADERS.map(({ value }) => (
                    <td key={transaction[value]}>
                      {value === 'date' && <div className="red-circle" />}
                      <span>
                        {(value === 'totalAmount' || value === 'balance') && `${transaction.currency} `}
                      </span>
                      {transaction[value]}
                    </td>))}
                </tr>
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

MEVTable.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object),
};

MEVTable.defaultProps = {
  transactions: [],
};
