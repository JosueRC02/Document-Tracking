import React from 'react';
import './assests/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Singup from './components/Singup';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
           <Route path="/" exact render = { props => (<Singup {...props}/>)}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
