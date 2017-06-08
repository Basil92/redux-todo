import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import todoReducers from './reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoApp from './components/App';
console.clear();
console.log("start!!!");

//window.id = 0;
let store = createStore(todoReducers);

ReactDOM.render(
    <Provider store={store}>
        <TodoApp hello="sdflkdjsflksdhfjdklsfjdklsfj111" />
    </Provider>,
    document.getElementById('container')
);

