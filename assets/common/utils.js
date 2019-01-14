export const HEADERS = [
  { value: 'date', label: 'Date' },
  { value: 'referenceNo', label: 'Reference No' },
  { value: 'orderNo', label: 'OrderNo' },
  { value: 'paymentType', label: 'Payment Type' },
  { value: 'totalAmount', label: 'Total Amount' },
  { value: 'balance', label: 'Balance' },
  { value: 'status', label: 'Status' },
];

export const CARDS = [
  { color: 'yellow', name: 'Trading Limit', price: 'AED 193,655,500.00' },
  { color: 'green', name: 'Security Deposit', price: 'AED 50,000,000.00' },
  { color: 'red', name: 'Trading Limit', price: 'AED 5,344,500.00' },
];

// A very simple search function
export function search(filter, transactions) {
  return transactions.filter((transaction) => {
    const find = Object.keys(transaction).find((key) => {
      const value = transaction[key].toUpperCase();
      return value.indexOf(filter.toUpperCase()) > -1;
    });
    return find;
  });
}
// A very simple Sort function
export function sort(transactions, direction, key) {
  return transactions.sort((a, b) => {
    if (a[key] === b[key]) return 0;
    const result = (a[key] < b[key]) ? -1 : 1;
    return direction === 'ASC' ? result : result * -1;
  });
}
