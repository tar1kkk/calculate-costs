import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import { Component } from 'react';
import Balance from './components/Balance';
import Form from './components/Form/form';
import Transactions from './components/Transactions/transctions';

let id = 0;
class App extends Component {
  constructor() {
    super();
    this.state = {
      balance: 0,
      transactions: []
    }
  }
  onIncrease = () => {
    this.setState((state) => ({
      balance: state.balance + 1,
      transactions: [{
        label: 'increase',
        value: 1,
        id: ++id
      }, ...state.transactions]
    }))
  }
  onDecrease = () => {
    this.setState((state) => ({
      balance: state.balance - 1,
      transactions: [{
        label: 'decrease',
        value: - 1,
        id: ++id
      }, ...state.transactions]
    }))
  }


  onChange = (value) => {
    this.setState((state) => ({
      balance: this.state.balance + Number(value),
      transactions: [{ value, label: 'change' }, ...state.transactions]
    }))
  }


  render() {
    return (
      <div>
        <Balance balance={this.state.balance} />
        <button onClick={this.onIncrease}>Добавить</button>
        <button onClick={this.onDecrease}>Отнять</button>
        <Form onChange={this.onChange} />
        <hr></hr>

        {this.state.transactions.map((transaction) => (
          <Transactions key={transaction.id} transaction={transaction} />
        ))}
      </div >
    )
  }
}
export default App;