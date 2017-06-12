// import { combineReducers } from 'redux'
// import addTodo from './addTodo'
// import removeTodo from './removeTodo';
//
// const todoReducers = combineReducers({
//     addTodo,
//     removeTodo
// })
//
// export default todoReducers;
import initialState from  '../index';

// const initialState = {
//     todos: [{id: 1, text: '1'}, {id: 2, text: '2'}, {id: 3, text: '3'}, {id: 4, text: '4'}],
// }

export default function (state = initialState, action) {

    const {type, id, text} = action;

    switch (type) {
        case 'REMOVE_TODO':
            return {...state, todos: state.todos.filter(t => t.id !== id)};
            break;

        case 'ADD_TODO':
            state.todos.push({id, text});
            return {...state, todos: [...state.todos] };
            //return {...state, todos: [...state.todos, {id, text}]};
            break;
        case 'ADDING':
            console.log(`ADDING ${text}`);
            //state.process =  true;
            return {...state, process: true };
            break;
        case 'ADDING_COMPLETE':
            console.log(`ADDING COMPLETE ${text}`);
            //state.process =  false;
            return {...state, process: false };
            break;
    }

    return state;
}