'use strict';

import React from 'react';

import Header from './header.component';
import Space from './space.component';


let App = ({onKeyUp, onKeyDown}) => {
    return (
        <div id={ 'App' } onKeyDown={onKeyDown} onKeyUp={onKeyUp} tabIndex={0}>
            <section id={ 'Header' }>
                <Header/>
            </section>

            <section id={ 'Space' }>
                <Space/>
            </section>

        </div>
    );
};

export default App;