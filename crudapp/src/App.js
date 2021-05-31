import { render } from '@testing-library/react';
import React, {Component} from 'react';
import './App.css';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';

function App() {
  return (
        
        <div>
          <TransactionList/>
        </div>
      )
  }

export default App;
