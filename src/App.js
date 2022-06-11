import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from './routes/routes';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </Router>
  );
      
};

export default App;
