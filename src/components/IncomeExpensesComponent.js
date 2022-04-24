import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
  const {transactions} = useContext (GlobalContext);
    
  return (
    <div className="inc-exp-container">
    <div>
      <h3>Income</h3>
      <p>+$0.00</p>
    </div>
    <div>
      <h3>Expense</h3>
      <p>-$0.00</p>
    </div>
  </div>
  )
}
