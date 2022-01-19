import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './App';

import { CometChat } from "@cometchat-pro/chat"
// import { ENV } from './env';

import reducer from './store/reducer';
import { MaterialUIControllerProvider } from "./context";
// import './index.scss';

const store = createStore(reducer, compose(
  applyMiddleware(thunk)
));

// var appID = ENV.APP_ID;
// var region = ENV.REGION;

var appID = "ENV.APP_ID";
var region = "ENV.REGION";

var appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
CometChat.init(appID, appSetting).then(() => {

    if(CometChat.setSource) {
      CometChat.setSource("ui-kit", "web", "reactjs");
    }
    console.log("Initialization completed successfully");
    ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
        <MaterialUIControllerProvider>
          <App />
          </MaterialUIControllerProvider>
        </BrowserRouter>
      </Provider>


    , document.getElementById('root'));
  },
  error => {
    console.log("Initialization failed with error:", error);
    // Check the reason for error and take appropriate action.
  }
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
