import React from 'react';
import { Header } from './components/HeaderComponent';
import { Balance } from './components/BalanceComponent';
import { IncomeExpenses } from './components/IncomeExpensesComponent';
import { TransactionList } from './components/TransactionListComponent';
import { AddTransaction } from './components/AddTransactionComponent';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header/>
        <div className='container'>
          <Balance/>
          <IncomeExpenses/>
          <div className='transactions-container'>
          <TransactionList/>
          </div>
          <div className='transactions-container'>
          <AddTransaction/>
        </div>
        </div>

    </GlobalProvider>
  );
}

export default App;
