import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import { HooksApp } from './HooksApp';
import { CounterApp } from './components/01-useState/CounterApp';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook'; */
import { MultipleCustomHooks } from './components/03-examples/multipleCustomHooks';
ReactDOM.render(
  <MultipleCustomHooks />,

  document.getElementById('root')
);

