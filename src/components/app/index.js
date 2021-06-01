import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import Home from '../../pages/home'
import CardPage from '../../pages/card-page'

const App = () => {

  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/details/:id" render={() => <CardPage />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
