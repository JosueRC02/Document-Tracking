import React from 'react';
import './assets/css/App.css';
import './assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Singup from './components/Singup';
import Singin from './components/Singin';
import Dashboard from './components/Dashboard';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
           <Route path="/" exact render = { props => (<Singin {...props}/>)}/>
           <Route path="/Singup" exact render = { props => (<Singup {...props}/>)}/>
           <Route path="/Dashboard" exact render = { props => (<Dashboard {...props}/>)}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
