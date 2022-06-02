import React from 'react';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Singup from './components/Singup';
import Singin from './components/Singin';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
           <Route path="/" exact render = { props => (<Singin {...props}/>)}/>
           <Route path="/Singup" exact render = { props => (<Singup {...props}/>)}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
