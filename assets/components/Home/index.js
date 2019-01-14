import React from 'react';

import './home.scss';
import MEVTable from '../MEVTable';
import Cards from '../Cards';
import { CARDS } from '../../common/utils';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      transactionsData: [],
    };
  }

  componentWillMount() {
    this.setState({ isLoading: true });
    fetch('/data/transactions.json').then((resp) => {
      resp.json().then((data) => {
        this.setState({ isLoading: false, transactionsData: data });
      });
    }).catch(() => {
      this.setState({ isLoading: false });
      alert('an error occur while fetching data');
    });
  }

  render() {
    const { isLoading, transactionsData } = this.state;
    return (
      <div className="container">
        <div className="breadcrumbs">
          <span className="left">customer list</span>
          <span> / customer details</span>
        </div>
        <div className="details">
          <span className="title">account details</span>
          <Cards cards={CARDS} />
        </div>
        {isLoading ? <h1 style={{ textAlign: 'center' }}>Loading...</h1>
          : <MEVTable transactions={transactionsData} /> }
      </div>
    );
  }
}
