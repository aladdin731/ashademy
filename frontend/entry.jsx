import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as UserAPI from './util/user_api_util';
import * as SessionAPI from './util/session_api_util';
import {fetchUser, fetchUsers, updateUserInfo} from '../frontend/actions/user_actions';
import {receiveCurrentUser, signup, login, logout} from '../frontend/actions/session_actions';
import {clearErrors} from './actions/session_actions.js';
import {updateCourse, deleteCourse, createCourse, fetchCourses, fetchCourse} from './actions/course_actions';
import * as CourseAPI from './util/course_api_util';
import * as RequestAPI from './util/request_ai_util.js';
import {createRequest, updateRequest} from './actions/request_actions';
import {createReview} from './actions/review_actions';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { currentUser: window.currentUser }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
    window.store = store;
    window.UserAPI = UserAPI;
    window.SessionAPI = SessionAPI;
    window.fetchUser = fetchUser;
    window.fetchUsers = fetchUsers;
    window.fetchCourses = fetchCourses;
    window.fetchCourse = fetchCourse;
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.updateUserInfo = updateUserInfo;
    window.receiveCurrentUser = receiveCurrentUser;
    window.clearErrors = clearErrors;
    window.createCourse = createCourse;
    window.updateCourse = updateCourse;
    window.deleteCourse = deleteCourse;
    window.CourseAPI = CourseAPI;
    window.RequestAPI = RequestAPI;
    window.updateRequest = updateRequest;
    window.createRequest = createRequest;
    window.createReview = createReview;
})