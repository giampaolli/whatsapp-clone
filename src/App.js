import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

class App extends Component {

    componentWillMount() {

        firebase.initializeApp({
          apiKey: "AIzaSyA0rTQ0mFICHBMMi2kXueBlnqHRi5ldtGM",
          authDomain: "whatsapp-clone-3fa3d.firebaseapp.com",
          databaseURL: "https://whatsapp-clone-3fa3d.firebaseio.com",
          projectId: "whatsapp-clone-3fa3d",
          storageBucket: "whatsapp-clone-3fa3d.appspot.com",
          messagingSenderId: "297314330317"
        });
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider>
        );
    }
}

export default App;
