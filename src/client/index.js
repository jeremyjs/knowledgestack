import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Layout } from './layout';
import { Home } from './components/home';
import { store } from './store'
import { ViewList } from './components/lists';

const App = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home} />
        <Route path="topics/:_id" component={TopicView} />
      </Route>
    </Router>
  </Provider>
)

// const App = () => (
//   <Provider store={store}>
//     <Router history={browserHistory}>
//       <Route path="/" component={Home} />
//     </Router>
//   </Provider>
// )

render(<App />, document.getElementById('app'));
