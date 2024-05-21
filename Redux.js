import React from 'react'
import './App.css';
import CustomerAdd from './CustomerAdd';
import CustomerView from './CustomerView';
import {Provider} from 'react-redux'
import {store} from './Store'


function Redux() {
  return (
    <Provider store={store}>
    <div className="Redux">
      <h1>React Redux Customer Example</h1>
      <CustomerAdd/>
      <CustomerView/>
    </div>
    </Provider>
    
  )
}

export default Redux