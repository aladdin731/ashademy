import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as UserAPI from './util/user_api_util';
import * as SessionAPI from './util/session_api_util';
import {fetchUser, updateUserInfo} from '../frontend/actions/user_actions';
import {receiveCurrentUser, logoutCurrentUser, signup, login, logout} from '../frontend/actions/session_actions';
import {clearErrors} from './actions/session_actions.js';

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
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.updateUserInfo = updateUserInfo;
    window.receiveCurrentUser = receiveCurrentUser;
    window.clearErrors = clearErrors;
})