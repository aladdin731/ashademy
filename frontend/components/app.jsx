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
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Footer from './footer/footer';
import CourseDetailContainer from '../components/course/course_detail_container';
import CourseIndexContainer from '../components/course/course_index_container';
import DashboardContainer from '../components/dashboard/dashboard_container';
import Modal from './modal/modal';
import SearchContainer from './search/search_container';
import SearchResultContainer from './search/search_result_container.js';

const App = () => (
  <div>
    <Modal />
    <header>
      <h1>Welcome to ashademy!</h1>
      <GreetingContainer />
    </header>
    <Switch>
      <Route path="/courses/:courseId" component={CourseDetailContainer}/>
      <Route exact path="/courses" component={CourseIndexContainer} />
      <ProtectedRoute path="/dashboard" component={DashboardContainer}/>
      <Route exact path="/" component={SearchContainer}/>
      <Route exact path="/searchResults" component={SearchResultContainer}/>
      <Redirect to="/"/>
    </Switch>
    
    <Footer />
  </div>
);

export default App;

