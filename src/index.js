import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import './styles/style.css';

import {
  App,
  BlogPage,
  CategoryPage,
  FrontPage,
  RecipePage
} from './pages';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route exact path="/" component={FrontPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/category" component={CategoryPage} />
      <Route path="/recipe" component={RecipePage} />
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
