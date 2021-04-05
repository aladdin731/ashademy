import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as UserAPI from './util/user_api_util';
import * as SessionAPI from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    window.store = store;
    window.UserAPI = UserAPI;
    window.SessionAPI = SessionAPI;
    ReactDOM.render(<Root store={store} />, root);
})