import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from "./greeting/greeting_container";
import Home from './home/home';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Footer from './footer/footer';

const App = () => (
  <div>
    <header>
      <h1>Welcome to ashademy!</h1>
      <GreetingContainer />
    </header>

    <Route exact path="/" component={Home} />
    <AuthRoute exact path="/login" component={LogInFormContainer} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    <Footer />
  </div>
);

export default App;