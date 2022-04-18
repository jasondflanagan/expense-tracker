import React from 'react';
import { Header } from './components/HeaderComponent';
import { Balance } from './components/BalanceComponent';
import { IncomeExpenses } from './components/IncomeExpensesComponent';
import { TransactionList } from './components/TransactionListComponent';
import { AddTransaction } from './components/AddTransactionComponent';


import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Balance/>
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransaction/>

    </div>
  );
}

export default App;
