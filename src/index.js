import React from 'react'
import ReactDOM from 'react-dom'


import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import 'bulma/css/bulma.css';
import './index.css';


import store, { history } from './store';
import App from './App';


const Root = () => {
  return(
    <Provider store={store}>
      <ConnectedRouter history={history}>
          <App/>
      </ConnectedRouter>
    </Provider>) ;
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
console.log('starting goodness...')
