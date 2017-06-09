import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import todoReducers from './reducers/index';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import TodoApp from './components/App';
import {createLogger} from 'redux-logger';
console.clear();
console.log("start!!!");

const initialState = {
    todos: [{id: 1, text: '1'}, {id: 2, text: '2'}, {id: 3, text: '3'}, {id: 4, text: '4'}],
}

// logger from library
//const logger = createLogger();

//my custom logger
const logger = (store) => next => action => {
    console.log(`type of action is ${action.type} action id is ${action.id} my old store is`);
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


let store = createStore(todoReducers, initialState, applyMiddleware(logger, mySecondEnhancers));

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('container')
);

export default initialState;