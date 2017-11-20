import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import './styles/style.css';

import {
  App,
  FrontPage
} from './pages';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route exact path="/" component={FrontPage} />
      <Route path="/tv" component={FrontPage} />
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
