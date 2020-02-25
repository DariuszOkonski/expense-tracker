import React, { Fragment } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransation = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: amount,
    }

    addTransaction(newTransation);

    setText('');
    setAmount(0);
  }
  return (
    <Fragment>
      <h3>Addd new transaction</h3>

      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="amount">Amount<br />(negative - expense, positive - income)</label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </Fragment>
  );
}

export default AddTransaction;