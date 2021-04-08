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
import CourseDetailContainer from '../components/course/course_detail_container';
import CourseIndexContainer from '../components/course/course_index_container';
import DashboardContainer from '../components/dashboard/dashboard_container';
import Modal from './modal/modal';


const App = () => (
  <div>
    <Modal />
    <header>
      <h1>Welcome to ashademy!</h1>
      <GreetingContainer />
    </header>
    <Switch>
      <Route exact path="/" component={CourseIndexContainer} />
      <Route path="/courses/:courseId" component={CourseDetailContainer}/>
      <ProtectedRoute path="/dashboard" component={DashboardContainer}/>
      <Redirect to="/"/>
    </Switch>
    
    <Footer />
  </div>
);

export default App;

      // <AuthRoute exact path="/login" component={LogInFormContainer} />
      // <AuthRoute exact path="/signup" component={SignUpFormContainer} />