import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { store } from './store'
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Layout } from './components/layout';
import { HomeView } from './components/home';
import { TopicView } from './components/topics';
import { CurriculumView } from './components/curriculae';

const App = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={HomeView} />
          <Route path="topics/:_id" component={TopicView}/>
          <Route path="curriculae/:_id" component={CurriculumView}/>
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>
);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

if (module.hot) {
  module.hot.accept();
}

render(<App />, document.getElementById('app'));
