import React from 'react';
import PropTypes from 'prop-types';

import './cards.scss';

export default class Cards extends React.Component {
  render() {
    const { cards } = this.props;
    return (
      <div className="boxes">
        {cards.map(({ color, name, price }) => (
          <div className="box" key={name + price}>
            <div className={`${color}-circle`} />
            <div>
              <div className="name">{name}</div>
              <div className="price">{price}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}


Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
};

Cards.defaultProps = {
  cards: [],
};
