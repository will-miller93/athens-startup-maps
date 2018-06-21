import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MapPage from './pages/mapPage/mapPage';
import ComOrgDash from './pages/comOrgDash/comOrgDash';
import StartUpDash from './pages/startUpdash/startUpDash';


// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MapPage} />
        <Route exact path='/communitydashboard' component={ComOrgDash} />
        <Route exact path='/startupdashboard' component={StartUpDash} />
      </Switch>
    </Router>
  )

}

export default App;
