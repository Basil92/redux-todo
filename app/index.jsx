import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import todoReducers from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import TodoApp from './components/App';
import thunk from 'redux-thunk';
import {initialState} from './store/initState';
import {createLogger} from 'redux-logger';
//console.clear();
console.log("start!!!");



// logger from library
//const logger = createLogger();

//my custom logger
const logger = (store) => next => action => {
    console.log(`MIDDLEWARE LOGGER: type of action is ${action.type}. STATE IS DOWN: `);
    console.log(store.getState());
    return next(action);
}

const mySecondEnhancers = (store) => next => action => {
    if (action.log) {
        console.log(`----action before delete log is ${action}`);
        console.log(action);
        action.log(action.id);
        delete action.log;
        console.log(`----action after delete log is ${action}`);
        console.log(action);
        console.log('before set timeout');
        let func = function(){
            console.log('after set timeout');
            //output with delay because i return new action with delay
            return next(action);
        }

        setTimeout(func, 1000);
    }

}

let store = createStore(todoReducers, initialState, applyMiddleware(logger, thunk));

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('container')
);

//export default initialState;