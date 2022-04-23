import React, { useContext } from 'react'
import { Transaction } from './TransactionComponent';

import { GlobalContext } from '../context/GlobalState'

export const TransactionList = () => {
  const {transactions} = useContext (GlobalContext);

  return (
    <>
    <h3>Transaction History</h3>
    <ul>
      {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
        
    </ul>
    </>
  )
}
