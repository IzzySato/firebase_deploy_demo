import React from 'react';
import Home from './pages/LandingPage.js';
import { AuthProvider } from "./contexts/AuthContext";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import UserAuth from "./components/userauth/userauth";
import Events from './pages/Events';
import Calendar from './pages/Calendar'

function App() {

  return (

    <React.Fragment>
      <Router>
      <Switch>
      <Route path="/events" component={Events} />
        <Route path="/" component={Home} exact />
        <Route path="/Dashboard" component={Dashboard} exact />
        <Route path="/Calendar" component={Calendar} exact />


        <AuthProvider>
          <UserAuth />
        </AuthProvider>
      </Switch>
    </Router>
    </React.Fragment>
  );
}

export default App;
