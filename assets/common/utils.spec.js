import { expect } from 'chai';
import { sort, search } from './utils';
import data from '../static/data/transactions';

describe('Search', () => {
  it('Search for specific value', () => {
    const result = search('ORD234092834', data);
    expect(result).to.be.a('array');
    expect(result).to.have.lengthOf(1);
  });
  it('should return many value', () => {
    const result = search('500', data);
    expect(result).to.be.a('array');
    expect(result).to.have.lengthOf(3);
  });
});

describe('Sort', () => {
  it('Sort By date', () => {
    const result = sort(data, 'ASC', 'date');
    expect(result).to.be.a('array');
    expect(result).to.have.lengthOf(5);
    expect(result[0].date).to.equal('2018/10/01');
    expect(result[4].date).to.equal('2018/10/05');
  });
  it('Sort By Balance', () => {
    const result = sort(data, 'DESC', 'balance');
    expect(result).to.be.a('array');
    expect(result).to.have.lengthOf(5);
    expect(result[0].balance).to.equal('193,800,500.00');
    expect(result[2].balance).to.equal('193,655,600.00');
  });
});
