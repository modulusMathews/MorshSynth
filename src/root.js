'use strict';

import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app.component';
import reducer from './reducers/index.reducer';

import KeyHandler from './handlers/key.handler';
import initialize from './utilities/initialize';


const store = createStore(reducer);
const key = KeyHandler(store);

//store.subscribe(() => console.log(store.getState().synth.toJS()));

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App onKeyDown={key.onDown} onKeyUp={key.onUp} />
        </Provider>,
        document.getElementById('container')
    );
};

render();

initialize(store.dispatch);

store.subscribe(render);
