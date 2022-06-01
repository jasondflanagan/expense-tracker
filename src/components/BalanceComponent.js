import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {

  const {transactions} = useContext (GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((tally, current)=> (tally+=current), 0).toFixed(2);

  return (
    <>
    <h2>Your Balance: ${total}</h2>
    </> 
  )
}
