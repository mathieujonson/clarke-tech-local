import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Header from './components/header';

const store = configureStore();

export default class App extends Component {
  render() {
    return (<div>
      <Header />
      <p>Now we're cooking!!!</p>
    </div>);
  }
}


render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('app')
);
